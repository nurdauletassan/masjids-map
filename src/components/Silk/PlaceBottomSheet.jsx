import React from "react";
import { BottomSheet } from "./BottomSheet";
import "./BottomSheet.css";
import "./ExampleBottomSheet.css";
import "./PlaceBottomSheet.css";

const PlaceBottomSheet = ({ place, isOpen, onClose }) => {
  if (!place) return null;

  return (
    <BottomSheet.Root open={isOpen} onOpenChange={onClose}>
      <BottomSheet.Portal>
        <BottomSheet.View>
          <BottomSheet.Backdrop />
          <BottomSheet.Content className="content">
            <BottomSheet.Handle />
            
            <div className="place-bottom-sheet-content">
              {/* Заголовок локации */}
              <div className="location-header">
                <div className="title-sheet">
                  {place.name}
                </div>
                <div className="subtitle-sheet">AFFILIATION & STATUS</div>
                <div className="verified-sheet">
                  <svg className="verified-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Content in 100% verified
                </div>
                <div className="status-description">
                  OPERATES UNDER THE SPIRITUAL ADMINISTRATION OF MUSLIMS OF KAZAKHSTAN AS AN EDUCATIONAL-METHODICAL MOSQUE
                </div>
              </div>
              
              {/* Изображение места */}
              <div className="place-image-container">
                <img 
                  src={place.photo} 
                  alt={place.name}
                  className="place-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200.png?text=Photo+Not+Available";
                  }}
                />
              </div>
              
              {/* Details Section */}
              <div className="details-section">
                <h3 className="section-title">Details</h3>
                
                <div className="detail-item">
                  <span className="detail-label">ADDRESS:</span>
                  <span className="detail-value">{place.details?.address || place.address}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">OPERATING HOURS:</span>
                  <span className="detail-value">{place.details?.operatingHours || "Everyday, 5:00 AM – 22:00 PM"}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">BUILT:</span>
                  <span className="detail-value">{place.details?.built || "Constructed in 1997 as a gift from Egypt to Kazakhstan, it's integrated within a multifunctional Islamic center"}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">FACILITIES & ACCESSIBILITY:</span>
                  <span className="detail-value">{place.details?.facilities || "Provides separate prayer areas for women and ablution areas (wudu accessible to all. On-site parking and full wheelchair accessibility."}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">CAPACITY & USAGE:</span>
                  <span className="detail-value">{place.details?.capacity || "The complex includes several thousand students and serves around 300–400 regular worshippers, rising to 1,300–1,500 during major events"}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">ARCHITECTURE & INTERIOR HIGHLIGHTS:</span>
                  <span className="detail-value">{place.details?.architecture || "Features a white dome with colorful stained-glass windows that cast warm, atmospheric light inside. The minaret is elegant and refined, reflecting oriental design traditions. Inside, you'll find copper chandeliers and mosaic-decorated windows, particularly on the western wall."}</span>
                </div>
              </div>
              
              {/* Facts Section */}
              <div className="facts-section">
                <h3 className="section-title">Facts</h3>
                
                <div className="facts-grid">
                  {place.facts?.map((fact, index) => (
                    <div key={index} className="fact-item">
                      <div className="fact-number">{fact.number}</div>
                      <div className="fact-label">{fact.label}</div>
                    </div>
                  )) || (
                    <>
                      <div className="fact-item">
                        <div className="fact-number">1997</div>
                        <div className="fact-label">GIFT FROM EGYPT</div>
                      </div>
                      
                      <div className="fact-item">
                        <div className="fact-number">2001</div>
                        <div className="fact-label">OFFICIALLY OPENED</div>
                      </div>
                      
                      <div className="fact-item">
                        <div className="fact-number">~60%</div>
                        <div className="fact-label">TRAINS OF KAZAKHSTAN'S IMAMS</div>
                      </div>
                      
                      <div className="fact-item">
                        <div className="fact-number">~200</div>
                        <div className="fact-label">ANNUAL GRADUATES</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Members Section */}
              <div className="members-section">
                <h3 className="section-title">Members</h3>
                
                <div className="members-grid">
                  {place.members?.map((member, index) => (
                    <div key={index} className="member-item">
                      <div className="member-photo">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="member-image"
                        />
                      </div>
                      <div className="member-info">
                        <div className="member-role">{member.role}</div>
                        <div className="member-name">{member.name}</div>
                      </div>
                    </div>
                  )) || (
                    <>
                      <div className="member-item">
                        <div className="member-photo">
                          <img 
                            src="https://via.placeholder.com/60x60.png?text=Imam" 
                            alt="Sheikh Erzhan Suleimenov"
                            className="member-image"
                          />
                        </div>
                        <div className="member-info">
                          <div className="member-role">Main imam</div>
                          <div className="member-name">Sheikh Erzhan Suleimenov</div>
                        </div>
                      </div>
                      
                      <div className="member-item">
                        <div className="member-photo">
                          <img 
                            src="https://via.placeholder.com/60x60.png?text=Imam" 
                            alt="Nurlan Abdirahman"
                            className="member-image"
                          />
                        </div>
                        <div className="member-info">
                          <div className="member-role">Naib Imam</div>
                          <div className="member-name">Nurlan Abdirahman</div>
                        </div>
                      </div>
                      
                      <div className="member-item">
                        <div className="member-photo">
                          <img 
                            src="https://via.placeholder.com/60x60.png?text=Imam" 
                            alt="Marat Zhandosuly"
                            className="member-image"
                          />
                        </div>
                        <div className="member-info">
                          <div className="member-role">Imam, Qur'an Lessons</div>
                          <div className="member-name">Marat Zhandosuly</div>
                        </div>
                      </div>
                      
                      <div className="member-item">
                        <div className="member-photo">
                          <img 
                            src="https://via.placeholder.com/60x60.png?text=Imam" 
                            alt="Damir Akhmetov"
                            className="member-image"
                          />
                        </div>
                        <div className="member-info">
                          <div className="member-role">Imam, Qur'an Lessons</div>
                          <div className="member-name">Damir Akhmetov</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Кнопки действий */}
              <div className="action-buttons">
                <BottomSheet.Trigger className="action-button primary" action="dismiss">
                  Получить маршрут
                </BottomSheet.Trigger>
                <BottomSheet.Trigger className="action-button secondary" action="dismiss">
                  Закрыть
                </BottomSheet.Trigger>
              </div>
            </div>
          </BottomSheet.Content>
        </BottomSheet.View>
      </BottomSheet.Portal>
    </BottomSheet.Root>
  );
};

export default PlaceBottomSheet;
