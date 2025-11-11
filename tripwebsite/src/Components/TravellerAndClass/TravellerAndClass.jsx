import React, { useState, useEffect, useRef } from 'react';
import './TravellerAndClass.scss';

export default function TravellerAndClass({ travellers, setTravellers, travelClass, setTravelClass }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (type, value) => {
    setTravellers((prev) => {
      const newValue = Math.max(0, prev[type] + value);
      if (type === 'adults' && newValue < 1) return prev;
      return { ...prev, [type]: newValue };
    });
  };

  const formatText = () => {
    const { adults, children, infants } = travellers;
    const parts = [];
    if (adults) parts.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
    if (children) parts.push(`${children} Child${children > 1 ? 'ren' : ''}`);
    if (infants) parts.push(`${infants} Infant${infants > 1 ? 's' : ''}`);
    return `${parts.join(', ')} - ${travelClass}`;
  };

  return (
    <div className="traveller-class" ref={dropdownRef}>
      <div className="traveller-display" onClick={() => setOpen(!open)}>
        {formatText()}
        <span className="arrow">{open ? '▲' : '▼'}</span>
      </div>

      {open && (
        <div className="traveller-dropdown">
          {['adults', 'children', 'infants'].map((type) => (
            <div className="row" key={type}>
              <div>
                <p className="title">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                <p className="subtitle">
                  {type === 'adults' ? '(12+ years)' : type === 'children' ? '(2–12 years)' : '(0–2 years)'}
                </p>
              </div>
              <div className="controls">
                <button onClick={() => handleChange(type, -1)}>-</button>
                <span>{travellers[type]}</span>
                <button onClick={() => handleChange(type, 1)}>+</button>
              </div>
            </div>
          ))}

          <div className="classes">
  {['Economy', 'Premium Economy', 'Business', 'First Class'].map((cls) => (
    <label key={cls}>
      <input
        type="radio"
        name="class"
        checked={travelClass === cls}
        onChange={() => setTravelClass(cls)}
      />
      <span>{cls}</span>
    </label>
  ))}
</div>


          <button className="done-btn" onClick={() => setOpen(false)}>Done</button>
        </div>
      )}
    </div>
  );
}
