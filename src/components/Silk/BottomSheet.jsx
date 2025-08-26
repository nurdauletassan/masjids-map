import React from "react";
import { Sheet } from "@silk-hq/components";
import "@silk-hq/components/layered-styles.css";
import "./ExampleBottomSheet.css";
// Root component
const BottomSheetRoot = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Root license="commercial" {...restProps} ref={ref}>
      {children}
    </Sheet.Root>
  );
});
BottomSheetRoot.displayName = "BottomSheet.Root";

// View component
const BottomSheetView = React.forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.View
      className={`bottom-sheet-view ${className || ""}`.trim()}
      nativeEdgeSwipePrevention={true}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.View>
  );
});
BottomSheetView.displayName = "BottomSheet.View";

// Backdrop component
const BottomSheetBackdrop = React.forwardRef(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={`bottom-sheet-backdrop ${className || ""}`.trim()}
      themeColorDimming="auto"
      {...restProps}
      ref={ref}
    />
  );
});
BottomSheetBackdrop.displayName = "BottomSheet.Backdrop";

// Content component
const BottomSheetContent = React.forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={`bottom-sheet-content ${className || ""}`.trim()}
      {...restProps}
      ref={ref}
    >
      <Sheet.BleedingBackground className="bottom-sheet-bleeding-background" />
      {children}
    </Sheet.Content>
  );
});
BottomSheetContent.displayName = "BottomSheet.Content";

// Handle component
const BottomSheetHandle = React.forwardRef(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Handle
      className={`bottom-sheet-handle ${className || ""}`.trim()}
      action="dismiss"
      {...restProps}
      ref={ref}
    />
  );
});
BottomSheetHandle.displayName = "BottomSheet.Handle";

// Trigger component
const BottomSheetTrigger = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Trigger {...restProps} ref={ref}>
      {children}
    </Sheet.Trigger>
  );
});
BottomSheetTrigger.displayName = "BottomSheet.Trigger";

// Portal component
const BottomSheetPortal = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Portal {...restProps} ref={ref}>
      {children}
    </Sheet.Portal>
  );
});
BottomSheetPortal.displayName = "BottomSheet.Portal";

// Title component
const BottomSheetTitle = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Title {...restProps} ref={ref}>
      {children}
    </Sheet.Title>
  );
});
BottomSheetTitle.displayName = "BottomSheet.Title";

// Description component
const BottomSheetDescription = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Description {...restProps} ref={ref}>
      {children}
    </Sheet.Description>
  );
});
BottomSheetDescription.displayName = "BottomSheet.Description";

// Export all components
export const BottomSheet = {
  Root: BottomSheetRoot,
  View: BottomSheetView,
  Backdrop: BottomSheetBackdrop,
  Content: BottomSheetContent,
  Handle: BottomSheetHandle,
  Trigger: BottomSheetTrigger,
  Portal: BottomSheetPortal,
  Title: BottomSheetTitle,
  Description: BottomSheetDescription,
};