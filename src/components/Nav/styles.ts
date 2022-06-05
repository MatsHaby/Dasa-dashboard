export const navStyles =  {
  drawer: {
    display: { xs: 'none', sm: 'block'},
    '& .MuiDrawer-paper': {
      backgroundColor: " #363636",
    },
  },
  list: {
    '&.MuiList-padding': {
      paddingTop: 0,
    },
  },
  listItem: {
    padding: 0,
  },
  selected: {
    color: "#FFFFFF",
    width: "100%",
    '&.Mui-selected': {
      color: '#F50157',
      backgroundColor: '#313131',
      },
  },
  IconButton: {
    mr: 2,
    color: '#F50157',
    marginLeft: 1,
    position: 'absolute',
    display: { sm: 'none' }
  }
}