import React from 'react';

import contactsAtrray from './mockContacts';
import ListContacts from './ListContacts';

function App() {
  return (
    <div>
      <ListContacts contacts={contactsAtrray} />
    </div>
  );
}

export default App;
