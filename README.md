# You-ResponsiveComponent

![](https://img.shields.io/badge/npm-v1.0.0-brightgreen)

A base class extending React Component, which has a listener on window resize event. 



## Install

```powershell
npm install you-responsivecomponent
```



## API Reference

### class ResponsiveComponent

>  *[src/ResponsiveComponent.tsx](https://github.com/AntoineYANG/You-ResponsiveComponent/blob/master/src/ResponsiveComponent.tsx)*

A `ResponsiveComponent` object is a `React.Component` object which is responsive to **resize event**. You can override the object method `componentWillResize` to handle resize event, and decide if it's necessary to automatically trigger a `forceUpdate` call. 



```tsx
class MyResponsiveCompo extends ResponsiveComponent<{ id: number; }, {}> {};
```

```tsx
<MyResponsiveCompo id={ 0 } />
```



#### Additional Lifecycle Methods

* **componentWillResize**

  Automatically called after the window resizes.

  If it returns `true`, `forceUpdate` will be called to update the elements. This will **NOT** cause a `setState` or a `getSnapshotBeforeUpdate` call. 

  **Parameters**

  * **WIDTH** {number}

    Current width of the window, px.

  * **HEIGHT** {number}

    Current height of the window, px.

  

**Returns** { void | boolean }

​	Only if this method returns `true` will cause a `forceUpdate` call. 



#### Deprecated Lifecycle Methods

**BEWARE** If you override these lifecycle methods when declare your class, the listener may not work as supposed. You need to use the new methods given as follow instead.

* _`componentDidMount`_ -> **`componentDidMountRE`**
* _`componentWillUnmount`_ -> **`componentWillUnmountRE`**



## Use

> *[src/demo.tsx](https://github.com/AntoineYANG/You-ResponsiveComponent/blob/master/src/demo.tsx)*

```tsx
import React from "react";
import { ResponsiveComponent } from "you-responsivecomponent";

interface Size {
    w: number;
    h: number;
};

class MyResponsiveCompo extends ResponsiveComponent<{}, {}> {
    
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
```



## Examples

View [**You-BilibiliFlv**](https://github.com/AntoineYANG/You-BilibiliFlv). 



## Contributing

Feel free to contribute by submitting a pull request.
