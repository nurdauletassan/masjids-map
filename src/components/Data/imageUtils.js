export const convertImageToBase64 = (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/jpeg');
      resolve(dataURL);
    };
    img.onerror = () => {
      // Fallback to placeholder if image fails to load
      resolve('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA1OCA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU4IiBoZWlnaHQ9IjU4IiByeD0iOSIgZmlsbD0iIzNCODJGNiIvPgo8dGV4dCB4PSIyOSIgeT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj7wn5GPPC90ZXh0Pgo8L3N2Zz4K');
    };
    img.src = imageUrl;
  });
};
