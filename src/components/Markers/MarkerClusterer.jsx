import shafranImage from '../../assets/shafran.jpg';

export const createClusterRenderer = (base64Images) => {
  return {
    render: ({ count, position, markers }) => {
      // Create stacked photos cluster
      let clusterHtml = '';
      
      if (count <= 4) {
        // For 1-4 markers show stacked photos with rotations
        clusterHtml = markers.slice(0, 4).map((marker, index) => {
          const placeId = marker.placeData?.id;
          const base64Image = base64Images[placeId] || shafranImage;
          const rotation = index === 0 ? 0 : index === 1 ? -8 : index === 2 ? 8 : -4;
          const offset = index * 3;
          return `<div style="
            position: absolute;
            width: 58px;
            height: 58px;
            background: url('${base64Image}') lightgray 50% / cover no-repeat;
            border-radius: 10px;
            border: 3px solid #FFF;
            box-shadow: 0 0 32px 0 rgba(58, 47, 15, 0.20);
            transform: rotate(${rotation}deg) translateY(${offset}px);
            z-index: ${10 - index};
            transition: all 0.3s ease;
            left: 50%;
            top: 50%;
            margin-left: -29px;
            margin-top: -29px;
          "></div>`;
        }).join('');
        clusterHtml = `<div style="position: relative; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; overflow: visible;">${clusterHtml}</div>`;
      } else if (count <= 8) {
        // For 5-8 markers show two stacks
        const firstStack = markers.slice(0, 4).map((marker, index) => {
          const placeId = marker.placeData?.id;
          const base64Image = base64Images[placeId] || shafranImage;
          const rotation = index === 0 ? 0 : index === 1 ? -6 : index === 2 ? 6 : -3;
          const offset = index * 2;
          return `<div style="
            position: absolute;
            width: 50px;
            height: 50px;
            background: url('${base64Image}') lightgray 50% / cover no-repeat;
            border-radius: 10px;
            border: 3px solid #FFF;
            box-shadow: 0 0 32px 0 rgba(58, 47, 15, 0.20);
            transform: rotate(${rotation}deg) translateY(${offset}px);
            z-index: ${10 - index};
            transition: all 0.3s ease;
            left: 50%;
            top: 50%;
            margin-left: -25px;
            margin-top: -25px;
          "></div>`;
        }).join('');
        
        const secondStack = markers.slice(4, 8).map((marker, index) => {
          const placeId = marker.placeData?.id;
          const base64Image = base64Images[placeId] || shafranImage;
          const rotation = index === 0 ? 0 : index === 1 ? -6 : index === 2 ? 6 : -3;
          const offset = index * 2;
          return `<div style="
            position: absolute;
            width: 50px;
            height: 50px;
            background: url('${base64Image}') lightgray 50% / cover no-repeat;
            border-radius: 10px;
            border: 3px solid #FFF;
            box-shadow: 0 0 32px 0 rgba(58, 47, 15, 0.20);
            transform: rotate(${rotation}deg) translateY(${offset}px);
            z-index: ${10 - index};
            transition: all 0.3s ease;
            left: 50%;
            top: 50%;
            margin-left: -25px;
            margin-top: -25px;
          "></div>`;
        }).join('');
        
        clusterHtml = `
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="position: relative; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; overflow: visible;">${firstStack}</div>
            <div style="position: relative; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; overflow: visible;">${secondStack}</div>
          </div>
        `;
      } else {
        // For more than 8 markers show stacked photos with count
        const stackPhotos = markers.slice(0, 6).map((marker, index) => {
          const placeId = marker.placeData?.id;
          const base64Image = base64Images[placeId] || shafranImage;
          const rotation = index === 0 ? 0 : index === 1 ? -5 : index === 2 ? 5 : index === 3 ? -3 : index === 4 ? 3 : -2;
          const offset = index * 1.5;
          return `<div style="
            position: absolute;
            width: 42px;
            height: 42px;
            background: url('${base64Image}') lightgray 50% / cover no-repeat;
            border-radius: 10px;
            border: 3px solid #FFF;
            box-shadow: 0 0 32px 0 rgba(58, 47, 15, 0.20);
            transform: rotate(${rotation}deg) translateY(${offset}px);
            z-index: ${10 - index};
            transition: all 0.3s ease;
            left: 50%;
            top: 50%;
            margin-left: -21px;
            margin-top: -21px;
          "></div>`;
        }).join('');
        
        clusterHtml = `
          <div style="position: relative; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; overflow: visible;">
            ${stackPhotos}
            <div style="
              position: absolute;
              bottom: -5px;
              right: -5px;
              background: #ef4444;
              color: white;
              border-radius: 50%;
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: bold;
              border: 2px solid white;
              box-shadow: 0 2px 6px rgba(0,0,0,0.2);
              z-index: 20;
            ">${count}</div>
          </div>
        `;
      }
      
      return new google.maps.Marker({
        position: position,
        icon: {
          url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="transparent"/>
              <foreignObject x="0" y="0" width="100" height="100">
                <div xmlns="http://www.w3.org/1999/xhtml">
                  ${clusterHtml}
                </div>
              </foreignObject>
            </svg>
          `)}`,
          scaledSize: new google.maps.Size(100, 100),
          anchor: new google.maps.Point(50, 50)
        }
      });
    }
  };
};
