import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checklist.scss';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'New Model', description: 'New Model > Template: Steel Construction', completed: false },
    { id: 2, text: 'Turn on Collaboration', description: 'Collaboration Tab > Worksets > Rename "Workset1" to "Architecture"', completed: false },
    { id: 3, text: 'Link Architecture Model', description: 'Link > Architecture Model > Origin to Origin > Place at Level 1', completed: false },
    { id: 4, text: 'Close project and reopen from Revit main menu', description: 'Click "Yes" to "Create a copy" prompt', completed: false },
    { id: 5, text: 'Worksets', description: 'Worksets > New > "Framing", "Tin" (For paneling and trim) > Make worksets non-editable (May have to close and reopen worksets dialog and save to Central Model)', completed: false },
    { id: 6, text: 'Switch to "Shared Levels & Grids" workset', description: '', completed: false },
    { id: 7, text: 'Gridlines', description: 'Create gridlines for all columns, including awning post > Utilize EQ constraint often.', completed: false },
    { id: 8, text: 'Adjust levels', description: '', completed: false },
    { id: 9, text: 'Switch to "Architecture" workset', description: '', completed: false },
    { id: 10, text: 'Slabs', description: 'Foundation on "0 Ground Floor" > Tin Ledge on "-1 Tin Ledge"', completed: false },
    { id: 11, text: 'Draw Walls', description: 'Use Empty - (inches)" > Draw on "0 Ground Floor", Height: Unconnected > Switch to "3D View", select walls and move to "-1 Tin Ledge"', completed: false },
    { id: 12, text: 'Roof', description: 'By Footprint > Draw on "T.O. Columns" > Left and right lines "Define Slope" > Change pitch > Use "Empty" type.', completed: false },
    { id: 13, text: 'Place Doors', description: '', completed: false },
    { id: 14, text: 'Place Windows', description: '', completed: false },
    { id: 15, text: 'Switch to "Tin" workset', description: '', completed: false },
    { id: 16, text: 'Roof (by extrusion)', description: 'Pick a beam as a plane, not a gridline. > Start extrusion: -0\'-6" > End: -Y\'-6" > For extra panel: Start: -(Y\' + 1\')-6" > End: -(Y\'-2\')-5" > Move to other end of building.', completed: false },
    { id: 17, text: 'Add Trim', description: 'Architecture > Roof > Fascia > Attach to "Empty" Roof.', completed: false },
    { id: 18, text: 'Roof Ridge', description: 'Architecture > Roof > Fascia > Attach to peak of "Empty" Roof.', completed: false },
    { id: 19, text: 'Wall Tin', description: 'Architecture > Walls > Sweep > Vertical', completed: false },
    { id: 20, text: 'Add Corner Trim', description: 'Use "-1 Tin Ledge" > Top: "Eaves"', completed: false },
    { id: 21, text: 'Colors', description: 'Change in "Edit Type" for each element.', completed: false },
    { id: 22, text: 'Switch to "Framing" workset', description: '', completed: false },
    { id: 23, text: 'Columns', description: 'Place on "0 Ground Floor" > Height: Unconnected > Use align tool WITH GRIDLINES and lock.', completed: false },
    { id: 24, text: 'Beams (Trusses)', description: 'Switch to 3D View > Enable 3D Snapping > Snap to "Empty" Roof', completed: false },
    { id: 25, text: 'Wall Beam Systems', description: 'Pick lines using gridlines if possible > Flip, rotate, adjust justification as needed.', completed: false },
    { id: 26, text: 'Roof Beam Systems', description: 'Pick plane (PK) from "Empty" Roof > Use copy tool if possible.', completed: false },
    { id: 27, text: 'Add Structural Connections', description: 'For purlins, search "purlin to flange" or "purlin to web"', completed: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);

    if (updatedItems.every(item => item.completed)) {
      document.getElementById('stopwatch-title').innerHTML = '<span class="text-success">Complete!</span>';
    } else {
      document.getElementById('stopwatch-title').innerHTML = 'Stopwatch';
    }
  };

  return (
    <div className="list-group">
      {items.map(item => (
        <label key={item.id} style={{ borderTop: '1px solid #dee2e6' }} className={`list-group-item d-flex gap-3 ${item.completed ? 'bg-success-subtle border-success' : 'bg-body-tertiary border-subtle'}`} >
          <input
            className="position-relative ms-1 me-0 form-check-input flex-shrink-0"
            type="checkbox"
            checked={item.completed}
            onChange={() => handleCheckboxChange(item.id)}
            style={{ fontSize: '1rem' }}
          />
          <span className="pt-1 form-checked-content">
            <strong>{item.text}</strong>
            <small className="d-block text-body-secondary">{item.description}</small>
          </span>
        </label>
      ))}
      <div className='text-center'>
        <img src={'racing-flag-icon.png'} className='img-thumbnail bg-secondary w-25 my-3' alt='Checkered racing flags' />
      </div>
    </div>
  );
};

export default Checklist;