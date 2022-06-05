export interface iWidgetData {
  id: number,
  name: string
  data: {
    id: number
    name: string,
    value: string | number | [] | boolean | object
  }[]
}

export interface iWidgetDataField {
  id: number,
  name: string,
  value: string | number | [] | boolean | object
}

export interface iWidget {
  id: number,
  data: {
    id: number,
    name: string,
    data: {
      id: number,
      name: string,
      value: string | number | [] | boolean | object
    }[]
  }[]
}