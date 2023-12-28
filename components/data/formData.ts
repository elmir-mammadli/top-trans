export type FormDataAttributes = 'from' | 'to' | 'formattedDate' | 'formatTime' | 'passengers' | 'luggage' | 'selectedCar' | 'email' | 'firstName' | 'lastName' | 'phoneNumber' | 'flightNumber'

export type FormDataVariables = {
    [Key in FormDataAttributes]: string   
} & {
    checked: boolean
}

export const FormData: FormDataVariables = {
    from: '',
    to: '',
    formattedDate: '',
    formatTime: '',
    passengers: '',
    luggage: '',
    selectedCar: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    flightNumber: '',
    checked: false
  }