import React from "react";
import { BottomSheet } from "./BottomSheet";
import "./BottomSheet.css";
import "./ExampleBottomSheet.css";

const ExampleBottomSheet = () => {
  return (
    <BottomSheet.Root>
      <BottomSheet.Trigger className="trigger-button">
        Открыть панель
      </BottomSheet.Trigger>
      <BottomSheet.Portal>
        <BottomSheet.View>
          <BottomSheet.Backdrop />
          <BottomSheet.Content className="content">
            <BottomSheet.Handle />
            
            {/* Два изображения */}
            <div className="images-container">
              <div className="image image-1" />
              <div className="image image-2" />
            </div>
            
            <div className="information">
              <BottomSheet.Title className="title">
                Добро пожаловать!
              </BottomSheet.Title>
              <BottomSheet.Description className="description">
                Это ваша кастомная панель с двумя изображениями.
              </BottomSheet.Description>
            </div>
            
            <BottomSheet.Trigger className="close-button" action="dismiss">
              Закрыть
            </BottomSheet.Trigger>
          </BottomSheet.Content>
        </BottomSheet.View>
      </BottomSheet.Portal>
    </BottomSheet.Root>
  );
};

export default ExampleBottomSheet;