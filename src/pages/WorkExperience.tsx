import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';
import { useNavigate } from 'react-router-dom';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);


  if (!timeLineData) return <div className="work-experience-loading">Loading timeline…</div>;

  const handleCardClick = (name: string) => {
    const normalized = name.trim().toLowerCase();

    if (normalized === 'texmin') {
      navigate('/experience/texmin');
    }

    if (normalized === 'vyomchara') {
      navigate('/experience/vyomchara');
    }
  };

  return (
    <section className="work-experience-page">
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience &amp; Education Timeline</h2>
        <p className="timeline-subtitle">Dive into the journeys that shaped my craft.</p>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => {
          const normalizedName = item.name.trim().toLowerCase();
          const isFeaturedWork = item.timelineType === 'work' && index === 0;
          const isNavigableWork = ['texmin', 'vyomchara'].includes(normalizedName);

          const baseWorkStyle = isFeaturedWork
            ? { background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.92), rgba(0, 0, 0, 0.92))', color: '#fff' }
            : { background: 'rgba(24, 24, 24, 0.95)', color: '#fff' };

          const educationStyle = { background: 'rgba(40, 40, 40, 0.95)', color: '#fff' };

          return (
          <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.timelineType}`}
              contentStyle={item.timelineType === 'work' ? baseWorkStyle : educationStyle}
              contentArrowStyle={
                item.timelineType === 'work'
                  ? {
                      borderRight: isFeaturedWork
                        ? '7px solid rgba(229, 9, 20, 0.9)'
                        : '7px solid rgba(24, 24, 24, 0.95)',
                    }
                  : { borderRight: '7px solid rgba(40, 40, 40, 0.95)' }
              }
              date={item.dateRange}
              iconStyle={
                item.timelineType === 'work'
                  ? { background: 'rgba(229, 9, 20, 0.85)', color: '#fff' }
                  : { background: 'rgba(90, 90, 90, 0.9)', color: '#fff' }
              }
              icon={item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}
            >
              <div
                className={`timeline-card ${item.timelineType} ${isNavigableWork ? 'timeline-card--interactive' : ''}`}
                role={isNavigableWork ? 'button' : undefined}
                tabIndex={isNavigableWork ? 0 : undefined}
                onClick={() => isNavigableWork && handleCardClick(item.name)}
                onKeyDown={(event) => {
                  if (!isNavigableWork) return;

                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleCardClick(item.name);
                  }
                }}
              >
                {item.timelineType === 'work' ? (
                  <>
                    <div className="timeline-card__header">
                      <span className="timeline-pill">Experience</span>
                      {isNavigableWork && <span className="timeline-cta">View story</span>}
                    </div>
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                    <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                    <ul className="timeline-summary">
                      {item.summaryPoints.map((point, summaryIndex) => (
                        <li key={summaryIndex}>{point}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <div className="timeline-card__header">
                      <span className="timeline-pill timeline-pill--education">Education</span>
                    </div>
                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                    <ul className="timeline-summary timeline-summary--single">
                      {item.summaryPoints.map((point, summaryIndex) => (
                        <li key={summaryIndex}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
