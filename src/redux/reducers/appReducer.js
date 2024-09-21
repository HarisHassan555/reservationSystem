case 'RESET_SELECTION':
  return {
    ...state,
    selectedDate: null,
    selectedSlot: null,
    selectedTable: null,
    userInfo: { name: '', phone: '', email: '' }
  };