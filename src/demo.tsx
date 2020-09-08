import React from "react";
import { ResponsiveComponent } from "./ResponsiveComponent";

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
