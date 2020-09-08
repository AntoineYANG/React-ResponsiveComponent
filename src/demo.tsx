import React from "react";
import { render } from 'react-dom';
import { ResponsiveComponent } from "../src/ResponsiveComponent";

interface Size {
    w: number;
    h: number;
};

export class MyResponsiveCompo extends ResponsiveComponent<{}, {}> {
    
    protected size: Size;
    
    public constructor(props: {}) {
        super(props);
        this.state = {};
        
        this.size = {
            w: NaN,
            h: NaN
        };
    }
    
    public render() {
        return (
            <div>
                <p>
                    { `WIDTH=${ this.size.w } HEIGHT=${ this.size.h }` }
                </p>
            </div>
        );
    }
    
    public componentWillResize(WIDTH: number, HEIGHT: number) {
        if (WIDTH === this.size.w && HEIGHT === this.size.h) {
            return false;
        } else {
            this.size.w = WIDTH;
            this.size.h = HEIGHT;
            return true;
        }
    }
  
};

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a demo.
        </p>
        <MyResponsiveCompo />
      </header>
    </div>
  );
  
};

render(<App />, document.querySelector('#root'));
