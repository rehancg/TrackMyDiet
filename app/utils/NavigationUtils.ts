import * as React from 'react';
import { NavigationContainerRef, NavigationState, PartialState, DrawerActions, StackActions } from '@react-navigation/core';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export function navigate(name: string, params: ["", object | undefined]) {
    navigationRef.current?.navigate(name, params);
}

export function push(name: string, params: object | undefined) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function pop(n: number) {
    navigationRef.current?.dispatch(StackActions.pop(n));
}

export function popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
}

export function openDrawer() {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

export function reset(state: NavigationState | PartialState<NavigationState>) {
    navigationRef.current?.reset(state);
}

export function goBack() {
    navigationRef.current?.goBack();
}