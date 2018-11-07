/* Copyright 2018 NEAR Protocol
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
import appStore from "../stores/AppStore";
import { MonacoUtils } from "../monaco-utils";

export interface ConsoleProps {
}

export class Console extends React.Component<ConsoleProps, {
}> {
  contextViewService: any;
  contextMenuService: any;

  constructor(props: ConsoleProps) {
    super(props);
    // tslint:disable-next-line
    this.contextViewService = new MonacoUtils.ContextViewService(document.documentElement, null, {trace: () => {}});
    this.contextMenuService = new MonacoUtils.ContextMenuService(document.documentElement, null, null, this.contextViewService);
  }
  componentDidMount() {
    appStore.onLoadProject.register(() => {
      // TODO: Do something here
      // (this.tree as any).model.setInput(appStore.getProject().getModel());
    });
  }
  componentWillReceiveProps(props: ConsoleProps) {
  }
  render() {
    return <div className="console"><h1>We can put console here</h1></div>;
  }
}
