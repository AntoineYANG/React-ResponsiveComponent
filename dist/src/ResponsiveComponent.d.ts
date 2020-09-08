import { Component } from "react";
/**
 * A base class extending React.Component.
 *
 * This kind of components will automatically called a method `componentWillResize`
 * after the window resized.
 *
 * To make sure the component works, DO NOT override method
 * `componentDidMount` or `componentWillUnmount`, use
 * `componentDidMountRE` and `componentWillUnmountRE` instead.
 *
 * @export
 * @class ResponsiveComponent
 * @extends {Component<P, S, SS>}
 * @template P type of props
 * @template S type of state
 * @template SS type of children
 */
export declare class ResponsiveComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
    /**
     * This is the listener of the resizing event.
     *
     * @private
     * @memberof ResponsiveComponent
     */
    private readonly _windowResizeListener;
    constructor(props: P);
    /**
     * Override this method when declaring a class extending ResponsiveComponent.
     *
     * This method is automatically called when the window resizes.
     *
     * If it returns `true`, `forceUpdate` will be called to update the elements.
     *
     * You need to realize that this process will NOT cause a `setState` or
     * a `getSnapshotBeforeUpdate` call.
     *
     * @param {number} WIDTH width of the window
     * @param {number} HEIGHT height of the window
     * @returns {boolean | void}
     * @memberof ResponsiveComponent
     */
    componentWillResize(WIDTH: number, HEIGHT: number): boolean | void;
    /**
     * UNSUGGESTED - use `componentDidMountRE` instead.
     *
     * @memberof ResponsiveComponent
     */
    readonly componentDidMount: () => void;
    /**
     * UNSUGGESTED - use `componentWillUnmountRE` instead.
     *
     * @memberof ResponsiveComponent
     */
    readonly componentWillUnmount: () => void;
    /**
     * Working as React cycling `componentDidMount`.
     *
     * Called immediately after a component is mounted.
     * Setting state here will trigger re-rendering.
     *
     * @protected
     * @memberof ResponsiveComponent
     */
    protected componentDidMountRE(): void;
    /**
     * Working as React cycling `componentWillUnmount`.
     *
     * Called immediately before a component is destroyed.
     * Perform any necessary cleanup in this method,
     * such as cancelled network requests,
     * or cleaning up any DOM elements created in componentDidMountRE.
     *
     * @protected
     * @memberof ResponsiveComponent
     */
    protected componentWillUnmountRE(): void;
}
