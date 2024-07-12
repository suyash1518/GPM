import React from 'react';
import PropTypes from 'prop-types';

const RowComponent = ({ sno, name, designation, purpose, department, mentor, status }) => {
  return (
    <div style={styles.row}>
      <div style={styles.cell}>{sno}</div>
      <div style={styles.cell}>{name}</div>
      <div style={styles.cell}>{designation}</div>
      <div style={styles.cell}>{purpose}</div>
      <div style={styles.cell}>{department}</div>
      <div style={styles.cell}>{mentor}</div>
      <div style={styles.cell}>{status}</div>
    </div>
  );
};

RowComponent.propTypes = {
  sno: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  mentor: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  cell: {
    flex: 1,
    padding: '10px',
  },
};

export default RowComponent;

// App Component to use RowComponent

import React from 'react';
import ReactDOM from 'react-dom';
import RowComponent from './RowComponent';

const App = () => {
  return (
    <div>
      <RowComponent
        sno={1}
        name="John Doe"
        designation="Software Engineer"
        purpose="Project Meeting"
        department="Engineering"
        mentor="Jane Smith"
        status="Approved"
      />
      {/* Add more RowComponent instances as needed */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));