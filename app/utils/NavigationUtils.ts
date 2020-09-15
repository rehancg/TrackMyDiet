import * as React from 'react';
import { NavigationContainerRef, NavigationState, PartialState, DrawerActions, StackActions } from '@react-navigation/core';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

function navigate(name: string, params?: object | undefined) {
    navigationRef.current?.navigate(name, params);
}

function navigateInto(name: string, params?: ["", object | undefined]) {
    navigationRef.current?.navigate(name, params);
}

function push(name: string, params: object | undefined) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
}

function pop(n: number) {
    navigationRef.current?.dispatch(StackActions.pop(n));
}

function popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
}

function openDrawer() {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

function reset(state: NavigationState | PartialState<NavigationState>) {
    navigationRef.current?.reset(state);
}

function resetToScreen(screen: string) {
    navigationRef.current?.reset({ index: 0, routes: [{ name: screen }] });
}

function goBack() {
    navigationRef.current?.goBack();
}

export default {
    navigate,
    push,
    pop,
    reset,
    resetToScreen,
    goBack,
    popToTop
}