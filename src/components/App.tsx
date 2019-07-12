/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactModal from "react-modal";

import { Workspace } from "./Workspace";
import { EditorView, ViewTabs, View, Tab, Tabs } from "./editor";
import { Header } from "./Header";
import { Toolbar } from "./Toolbar";
import { ViewType, defaultViewTypeForFileType } from "./editor/View";
import { build, runTask, openFiles, pushStatus, popStatus, clearLog , createAccount, deployAndRun} from "../actions/AppActions";

import appStore from "../stores/AppStore";
import {
  addFileTo,
  loadProject,
  initStore,
  updateFileNameAndDescription,
  deleteFile,
  splitGroup,
  openProjectFiles,
  openFile,
  openView,
  closeView,
  closeTabs,
  saveProject,
  focusTabGroup,
  setViewType,
  logLn,
} from "../actions/AppActions";
import { Project, File, FileType, Directory, ModelRef } from "../models";
import { Service, Language } from "../service";
import { Split, SplitOrientation, SplitInfo } from "./Split";

import { layout, assert, resetDOMSelection } from "../util";

import * as Mousetrap from "mousetrap";
import { Gulpy } from "../gulpy";
import {
  GoDelete,
  GoPencil,
  GoGear,
  GoVerified,
  GoFileCode,
  GoQuote,
  GoFileBinary,
  GoFile,
  GoCheck,
  GoDesktopDownload,
  GoBook,
  GoRepoForked,
  GoRocket,
  GoBeaker,
  GoBeakerGear,
  GoThreeBars,
  GoOpenIssue,
  GoQuestion,
  Play,
} from "./shared/Icons";
import { Button } from "./shared/Button";

import { NewFileDialog } from "./NewFileDialog";
import { EditFileDialog } from "./EditFileDialog";
import { UploadFileDialog } from "./UploadFileDialog";
import { ToastContainer } from "./Toasts";
import { Spacer, Divider } from "./Widgets";
import { ShareDialog } from "./ShareDialog";
import { NewProjectDialog, Template } from "./NewProjectDialog";
import { NewDirectoryDialog } from "./NewDirectoryDialog";
import { Errors } from "../errors";
import { ControlCenter } from "./ControlCenter";
import Group from "../utils/group";
import { StatusBar } from "./StatusBar";
import { publishArc, notifyArcAboutFork } from "../actions/ArcActions";
import { RunTaskExternals } from "../utils/taskRunner";
import { BrowserLocalStorageKeystore, KeyPair } from "nearlib";
import getConfig from "../config";
import { gaEvent } from "../utils/ga";

// Gunk to be able to use js classes from typescript.
class KeyStore extends BrowserLocalStorageKeystore {}

export interface AppState {
  project: ModelRef<Project>;
  file: ModelRef<File>;
  fiddle: string;

  /**
   * If not null, the the new file dialog is open and files are created in this
   * directory.
   */
  newFileDialogDirectory?: ModelRef<Directory>;

  /**
   * If not null, the the edit file dialog is open.
   */
  editFileDialogFile?: ModelRef<File>;

  /**
   * If true, the share fiddle dialog is open.
   */
  shareDialog: boolean;

  /**
   * If true, the new project dialog is open.
   */
  newProjectDialog: boolean;

  /**
   * Primary workspace split state.
   */
  workspaceSplits: SplitInfo[];

  /**
   * Secondary control center split state.
   */
  controlCenterSplits: SplitInfo[];

  /**
   * Editor split state.
   */
  editorSplits: SplitInfo[];
  /**
   * If not null, the upload file dialog is open.
   */
  uploadFileDialogDirectory: ModelRef<Directory>;
  /**
   * If true, the new directory dialog is open.
   */
  newDirectoryDialog: ModelRef<Directory>;
  showProblems: boolean;
  tabGroups: Group[];
  activeTabGroup: Group;
  hasStatus: boolean;
  isContentModified: boolean;
  windowDimensions: string;
  quickStart: boolean;
  accountId: string;
  keyStore: KeyStore;

  /**
   * Project is ready and can be run or tested.
   */
  projectReady: boolean;
}

export interface AppProps {
  /**
   * If true, the Update button is visible.
   */
  update: boolean;
  fiddle: string;
  embeddingParams: EmbeddingParams;
  windowContext: AppWindowContext;

  /*
   * If true, the app will start in a quick start mode (most functionality hidden,
   * only specific relevant files open).
   */
  quickStart: boolean;
}

export enum EmbeddingType {
  None,
  Default,
  Arc
}

export interface EmbeddingParams {
  type: EmbeddingType;
  templatesName: string;
}

export interface AppWindowContext {
  promptWhenClosing: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  fiddle: string;
  toastContainer: ToastContainer;
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fiddle: props.fiddle,
      project: null,
      file: null,
      newFileDialogDirectory: null,
      editFileDialogFile: null,
      newProjectDialog: !props.fiddle,
      shareDialog: false,
      workspaceSplits: [
        {
          min: 200,
          max: 400,
          value: 200,
        },
        {
          min: 256
        }
      ],
      controlCenterSplits: [
        { min: 100 },
        { min: 40, value: 256 }
      ],
      editorSplits: [],
      showProblems: true,
      uploadFileDialogDirectory: null,
      newDirectoryDialog: null,
      tabGroups: null,
      activeTabGroup: null,
      windowDimensions: App.getWindowDimensions(),
      hasStatus: false,
      isContentModified: false,
      quickStart: props.quickStart,
      accountId: App.getAccountId(),
      keyStore: new BrowserLocalStorageKeystore(),
      projectReady: false,
    };
    // TODO: Ugly hack used in File.save
    // TODO: There should be better way to propagate state.
    // TODO: fiddle should be moved to AppStore
    (window as any).app = this;
  }
  private async initializeProject() {
    initStore();
    this.setState({
      project: appStore.getProject(),
      tabGroups: appStore.getTabGroups(),
      activeTabGroup: appStore.getActiveTabGroup(),
      hasStatus: appStore.hasStatus(),
    });
    this.bindAppStoreEvents();
    if (this.state.fiddle) {
      this.loadProjectFromFiddle(this.state.fiddle);
    }
    if (this.state.quickStart) {
      this.toggleWorkspaceSplit();
    }
    if (!this.state.accountId) {
      const randomSuffix = Math.floor(Math.random() * 9999999999);
      const accountId = "studio" + randomSuffix;
      const keyPair = await KeyPair.fromRandomSeed();
      const createAccountResponse = await createAccount(accountId, keyPair.getPublicKey());
      this.state.keyStore.setKey(accountId, keyPair);
      App.setAccountId(accountId);
    }
  }
  private static getWindowDimensions(): string {
    return `${window.innerWidth}x${window.innerHeight}@${window.devicePixelRatio}`;
  }
  private static getAccountId(): string {
    return window.localStorage.getItem("nearstudio_account_id");
  }
  private static setAccountId(accountId: string) {
    window.localStorage.setItem("nearstudio_account_id", accountId);
  }
  private async loadProjectFromFiddle(uri: string) {
    const project = new Project();
    pushStatus("Downloading Project");
    const fiddle = await Service.loadJSON(uri);
    project.fiddleName = uri;
    project.fiddleEditable = fiddle.editable;
    popStatus();
    if (fiddle.success) {
      await Service.loadFilesIntoProject(fiddle.files, project);
      loadProject(project);
      // Special files for quick start mode.
      // TODO: save this data in the fiddle.
      const maintspath = "assembly/main.ts";
      const mainjspath = "src/main.js";
      if (this.state.quickStart && project.getFile(maintspath) && project.getFile(mainjspath)) {
        openFiles([[maintspath, mainjspath]]);
      } else if (project.getFile("README.md")) {
        openFiles([["README.md"]]);
      }
    } else {
      if (this.toastContainer) {
        this.toastContainer.showToast(<span>Project {uri} was not found.</span>, "error");
      }
    }
  }
  bindAppStoreEvents() {
    appStore.onLoadProject.register(() => {
      this.setState({ project: appStore.getProject() });
      // Run delayed to avoid recursive dispatch (e.g. when logLn is called downstream)
      setTimeout(() => {
        runTask("project:load", true, RunTaskExternals.Setup).then(() => {
          this.setState({ projectReady: true });
        });
      });
    });
    appStore.onDirtyFileUsed.register((file: File) => {
      this.logLn(`Changes in ${file.getPath()} were ignored, save your changes.`, "warn");
    });
    appStore.onTabsChange.register(() => {
      this.setState({
        tabGroups: appStore.getTabGroups(),
        activeTabGroup: appStore.getActiveTabGroup(),
      });
      layout();
    });
    appStore.onDidChangeStatus.register(() => {
      this.setState({
        hasStatus: appStore.hasStatus(),
      });
    });
    appStore.onDidChangeIsContentModified.register(() => {
      this.props.windowContext.promptWhenClosing = appStore.getIsContentModified();
      this.setState({
        isContentModified: appStore.getIsContentModified(),
      });
    });
  }

  // TODO: Optimize
  // shouldComponentUpdate(nextProps: any, nextState: AppState) {
  //   let state = this.state;
  //   if (state.file !== nextState.file) return true;
  //   if (state.group !== nextState.group) return true;
  //   if (!shallowCompare(state.groups, nextState.groups)) return true;
  //   return false;
  // }

  async loadReleaseNotes() {
    const response = await fetch("notes/notes.md");
    const src = await response.text();
    const notes = new File("Release Notes", FileType.Markdown);
    notes.setData(src);
    openFile(notes, defaultViewTypeForFileType(notes.type));
  }

  async loadHelp() {
    const response = await fetch("notes/help.md");
    const src = await response.text();
    const help = new File("Help", FileType.Markdown);
    help.setData(src);
    openFile(help, defaultViewTypeForFileType(help.type));
  }

  private publishArc(): Promise<void> {
    if (this.state.isContentModified) {
      return this.fork().then(publishArc);
    } else {
      return publishArc();
    }
  }

  registerShortcuts() {
    Mousetrap.bind("command+b", () => {
      build();
    });
    Mousetrap.bind("command+enter", () => {
      if (this.props.embeddingParams.type !== EmbeddingType.Arc) {
        deployAndRun(this.state.fiddle);
      } else {
        this.publishArc();
      }
    });
  }
  logLn(message: string, kind: "" | "info" | "warn" | "error" = "") {
    logLn(message, kind);
  }
  componentWillMount() {
    this.initializeProject();
  }
  componentDidMount() {
    layout();
    this.registerShortcuts();
    window.addEventListener("resize", () => {
      this.setState({
        windowDimensions: App.getWindowDimensions(),
      });
    }, false);
    if (this.props.embeddingParams.type === EmbeddingType.Arc) {
      window.addEventListener("message", (e) => {
        if (typeof e.data === "object" && e.data !== null && e.data.type === "arc/fork") {
          this.fork();
        }
      });
    }
  }

  share() {
    this.setState({ shareDialog: true });
  }
  newProject() {
    gaEvent("newProject");
    this.setState({ newProjectDialog: true });
  }

  async update() {
    saveProject(this.state.fiddle);
  }

  async fork() {
    pushStatus("Forking Project");
    const fiddle = await saveProject("");
    popStatus();
    const search = window.location.search;
    if (this.state.fiddle) {
      assert(search.indexOf(this.state.fiddle) >= 0);
      history.replaceState({}, fiddle, search.replace(this.state.fiddle, fiddle));
    } else {
      const prefix = search ? search + "&" : "?";
      history.pushState({}, fiddle, `${prefix}f=${fiddle}`);
    }
    this.setState({ fiddle });
    appStore.getProject().getModel().fiddleEditable = true;
    if (this.props.embeddingParams.type === EmbeddingType.Arc) {
      notifyArcAboutFork(fiddle);
    }
  }

  async forkIfNeeded(): Promise<boolean> {
    if (!this.state.fiddle || !appStore.getProject().getModel().fiddleEditable) {
      if (!confirm("Looks like you don't have write access to this fiddle.\n\nFork to have a writable copy?")) {
        return false;
      }

      await this.fork();
    }
    return true;
  }

  async download() {
    this.logLn("Downloading Project ...");
    gaEvent("DownloadProject");
    const downloadService = await import("../utils/download");
    const projectModel = this.state.project.getModel();
    await downloadService.downloadProject(projectModel, this.state.fiddle);
    this.logLn("Project Zip CREATED ");
  }
  /**
   * Remember workspace split.
   */
  private workspaceSplit: SplitInfo = null;

  toolbarButtonsAreDisabled() {
    return this.state.hasStatus;
  }

  // TODO: refactor to have idempotent state change functions
  toggleWorkspaceSplit() {
    const workspaceSplits = this.state.workspaceSplits;
    const first = workspaceSplits[0];
    const second = workspaceSplits[1];
    if (this.workspaceSplit) {
      Object.assign(first, this.workspaceSplit);
      this.workspaceSplit = null;
      delete second.value;
    } else {
      this.workspaceSplit = Object.assign({}, first);
      first.max = first.min = 0;
    }
    this.setState({ workspaceSplits });
  }

  makeToolbarButtons() {
    const toolbarButtons = [
      <Button
        key="ViewWorkspace"
        icon={<GoThreeBars />}
        title="View Project Workspace"
        onClick={() => {
          this.toggleWorkspaceSplit();
        }}
      />,
      <Button
        key="NewProject"
        icon={<GoFile />}
        label="New"
        title="New Project"
        isDisabled={this.toolbarButtonsAreDisabled()}
        onClick={() => {
          this.newProject();
        }}
      />
    ];
    if (this.props.embeddingParams.type === EmbeddingType.Default) {
      toolbarButtons.push(
        <Button
          key="EditInWebAssemblyStudio"
          icon={<GoPencil />}
          label="Edit in NEAR Studio"
          title="Edit Project in NEAR Studio"
          isDisabled={!this.state.fiddle}
          href={`//studio.nearprotocol.com/?f=${this.state.fiddle}`}
          target="wasm.studio"
          rel="noopener noreferrer"
        />);
    }
    if (this.props.embeddingParams.type === EmbeddingType.None &&
        this.props.update) {
      toolbarButtons.push(
        <Button
          key="UpdateProject"
          icon={<GoPencil />}
          label="Update"
          title="Update Project"
          isDisabled={this.toolbarButtonsAreDisabled()}
          onClick={() => {
            this.update();
          }}
        />
      );
    }
    if (this.props.embeddingParams.type === EmbeddingType.None ||
        this.props.embeddingParams.type === EmbeddingType.Arc) {
      toolbarButtons.push(
        <Button
          key="ForkProject"
          icon={<GoRepoForked />}
          label="Fork"
          title="Fork Project"
          isDisabled={this.toolbarButtonsAreDisabled()}
          onClick={() => {
            this.fork();
          }}
        />
      );
    }
    if (this.props.embeddingParams.type === EmbeddingType.None) {
      toolbarButtons.push(
        <Button
          key="Download"
          icon={<GoDesktopDownload />}
          label="Download"
          title="Download Project"
          isDisabled={this.toolbarButtonsAreDisabled()}
          onClick={() => {
            this.download();
          }}
        />,
        <Button
          key="Share"
          icon={<GoRocket />}
          label="Share"
          title={this.state.fiddle ? "Share Project" : "Cannot share a project that has not been forked yet."}
          isDisabled={this.toolbarButtonsAreDisabled() || !this.state.fiddle}
          onClick={() => {
            this.share();
          }}
        />);
    }
    if (this.props.embeddingParams.type !== EmbeddingType.Arc) {
      toolbarButtons.push(
        <Button
          key="Run"
          icon={<Play />}
          label="Run"
          title="Run Project: CtrlCmd + Enter"
          isDisabled={this.toolbarButtonsAreDisabled() || !this.state.projectReady}
          onClick={() => {
            deployAndRun(this.state.fiddle);
          }}
        />,
      );
      toolbarButtons.push(
        <Button
          key="Test"
          icon={<GoCheck />}
          label="Test"
          title="Run project tests"
          isDisabled={this.toolbarButtonsAreDisabled() || !this.state.projectReady}
          onClick={() => {
            const contractSuffix = "_t" + new Date().getTime();
            deployAndRun(this.state.fiddle, "test.html", contractSuffix);
          }}
        />,
      );
    }
    if (this.props.embeddingParams.type === EmbeddingType.Arc) {
      toolbarButtons.push(
        <Button
          key="Preview"
          icon={<GoGear />}
          label="Preview"
          title="Preview Project: CtrlCmd + Enter"
          isDisabled={this.toolbarButtonsAreDisabled()}
          onClick={() => {
            this.publishArc();
          }}
        />
      );
      toolbarButtons.push(
        <Button
          key="BuildAndPreview"
          icon={<GoGear />}
          label="Build &amp; Preview"
          title="Build &amp; Preview Project: CtrlCmd + Alt + Enter"
          isDisabled={this.toolbarButtonsAreDisabled()}
          onClick={() => {
            build().then((buildSuccess) => {
              if (buildSuccess) {
                this.publishArc();
              }
            });
          }}
        />
      );
    }
    if (this.props.embeddingParams.type === EmbeddingType.None) {
      toolbarButtons.push(
        <Button
          key="GithubIssues"
          icon={<GoOpenIssue />}
          label="Report a Bug"
          title="Report a Bug"
          customClassName="issue"
          href="https://github.com/nearprotocol/NEARStudio/issues"
          target="_blank"
          rel="noopener noreferrer"
        />,
        <Button
          key="HelpAndPrivacy"
          icon={<GoQuestion />}
          label="Help & Privacy"
          title="Help & Privacy"
          customClassName="help"
          onClick={() => {
            this.loadHelp();
          }}
        />
      );
    }
    return toolbarButtons;
  }
  render() {
    const self = this;

    const makeEditorPanes = () => {
      const groups = this.state.tabGroups;
      const activeGroup = this.state.activeTabGroup;

      if (groups.length === 0) {
        return <div>No Groups</div>;
      }
      return groups.map((group: Group, i: number) => {
        // tslint:disable-next-line:jsx-key
        return <ViewTabs
          key={`editorPane${i}`}
          views={group.views.slice(0)}
          view={group.currentView}
          preview={group.preview}
          onSplitViews={() => splitGroup()}
          hasFocus={activeGroup === group}
          onFocus={() => {
            // TODO: Should be taken care of in shouldComponentUpdate instead.
            focusTabGroup(group);
          }}
          onChangeViewType={(view, type) => setViewType(view, type)}
          onClickView={(view: View) => {
            if (!(appStore.getActiveTabGroup().currentView === view)) {
              // Avoids the propagation of content selection between tabs.
              resetDOMSelection();
            }
            focusTabGroup(group);
            openView(view);
          }}
          onDoubleClickView={(view: View) => {
            focusTabGroup(group);
            openView(view, false);
          }}
          onClose={(view: View) => {
            if (!view.file.isDirty || confirm(`${view.file.name} has unsaved changes, are you sure you want to close it?`)) {
              focusTabGroup(group);
              closeView(view);
            }
          }}
        />;
      });
    };

    const editorPanes = <Split
      name="Editors"
      orientation={SplitOrientation.Vertical}
      defaultSplit={{
        min: 128,
      }}
      splits={this.state.editorSplits}
      onChange={(splits) => {
        this.setState({ editorSplits: splits });
        layout();
      }}
    >
      {makeEditorPanes()}
    </Split>;

    return <div className="fill">
      <div style={{ padding: "5px", backgroundColor: "rgb(100, 79, 238)", textAlign: "center"}}>
        <span>Building a DApp? </span><a style={{ color: "white" }} href="https://nearprotocol.com/beta/">Apply to the Beta Program!</a>
      </div>
      <ToastContainer ref={(ref) => this.toastContainer = ref}/>
      {this.state.newProjectDialog &&
        <NewProjectDialog
          isOpen={true}
          templatesName={this.props.embeddingParams.templatesName}
          onCancel={() => {
            this.setState({ newProjectDialog: null });
          }}
          onCreate={async (template: Template) => {
            await openProjectFiles(template);
            this.setState({ newProjectDialog: false });
            await this.fork();
          }}
        />
      }
      {this.state.newFileDialogDirectory &&
        <NewFileDialog
          isOpen={true}
          directory={this.state.newFileDialogDirectory}
          onCancel={() => {
            this.setState({ newFileDialogDirectory: null });
          }}
          onCreate={(file: File) => {
            addFileTo(file, this.state.newFileDialogDirectory.getModel());
            this.setState({ newFileDialogDirectory: null });
          }}
        />
      }
      {this.state.editFileDialogFile &&
        <EditFileDialog
          isOpen={true}
          file={this.state.editFileDialogFile}
          onCancel={() => {
            this.setState({ editFileDialogFile: null });
          }}
          onChange={(name: string, description) => {
            const file = this.state.editFileDialogFile.getModel();
            updateFileNameAndDescription(file, name, description);
            this.setState({ editFileDialogFile: null });
          }}
        />
      }
      {this.state.shareDialog &&
        <ShareDialog
          isOpen={true}
          fiddle={this.state.fiddle}
          onCancel={() => {
            this.setState({ shareDialog: false });
          }}
        />
      }
      {this.state.uploadFileDialogDirectory &&
        <UploadFileDialog
          isOpen={true}
          directory={this.state.uploadFileDialogDirectory}
          onCancel={() => {
            this.setState({ uploadFileDialogDirectory: null });
          }}
          onUpload={(files: File[]) => {
            files.map((file: File) => {
              addFileTo(file, this.state.uploadFileDialogDirectory.getModel());
            });
            this.setState({ uploadFileDialogDirectory: null });
          }}
        />
      }
      {this.state.newDirectoryDialog &&
        <NewDirectoryDialog
          isOpen={true}
          directory={this.state.newDirectoryDialog}
          onCancel={() => {
            this.setState({ newDirectoryDialog: null });
           }}
          onCreate={(directory: Directory) => {
            addFileTo(directory, this.state.newDirectoryDialog.getModel());
            this.setState({ newDirectoryDialog: null });
          }}
        />
      }
      <div style={{ height: "calc(100% - 51px)" }}>
        <Split
          name="Workspace"
          orientation={SplitOrientation.Vertical}
          splits={this.state.workspaceSplits}
          onChange={(splits) => {
            this.setState({ workspaceSplits: splits });
            layout();
          }}
        >
          <Workspace
            project={this.state.project}
            file={this.state.file}
            onNewFile={(directory: Directory) => {
              this.setState({ newFileDialogDirectory: ModelRef.getRef(directory)});
            }}
            onEditFile={(file: File) => {
              this.setState({ editFileDialogFile: ModelRef.getRef(file)});
            }}
            onDeleteFile={(file: File) => {
              let message = "";
              if (file instanceof Directory) {
                message = `Are you sure you want to delete '${file.name}' and its contents?`;
              } else {
                message = `Are you sure you want to delete '${file.name}'?`;
              }
              if (confirm(message)) {
                closeTabs(file);
                deleteFile(file);
              }
            }}
            onClickFile={(file: File) => {
              // Avoids the propagation of content selection between tabs.
              resetDOMSelection();
              openFile(file, defaultViewTypeForFileType(file.type));
            }}
            onDoubleClickFile={(file: File) => {
              if (file instanceof Directory) {
                return;
              }
              openFile(file, defaultViewTypeForFileType(file.type), false);
            }}
            onMoveFile={(file: File, directory: Directory) => {
              addFileTo(file, directory);
            }}
            onUploadFile={(directory: Directory) => {
              this.setState({ uploadFileDialogDirectory: ModelRef.getRef(directory)});
            }}
            onNewDirectory={(directory: Directory) => {
              this.setState({ newDirectoryDialog: ModelRef.getRef(directory)});
            }}
          />
          <div className="fill">
            <div style={{ height: "40px" }}>
              <Toolbar>{this.makeToolbarButtons()}</Toolbar>
            </div>
            <div style={{ height: "calc(100% - 40px)" }}>
              <Split
                name="Console"
                orientation={SplitOrientation.Horizontal}
                splits={this.state.controlCenterSplits}
                onChange={(splits) => {
                  this.setState({ controlCenterSplits: splits });
                  layout();
                }}
              >
                {editorPanes}
                <ControlCenter
                  onToggle={() => {
                    const splits = this.state.controlCenterSplits;
                    splits[1].value = splits[1].value === 40 ? 256 : 40;
                    this.setState({ controlCenterSplits: splits });
                    layout();
                  }}
                />
              </Split>
            </div>
          </div>
        </Split>
      </div>
      <StatusBar />
      <div id="task-runner-content" />
    </div>;
  }
}
