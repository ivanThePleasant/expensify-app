const moment = jest.requireActual('moment')

// eslint-disable-next-line import/no-anonymous-default-export
export default (timestamp = 0) => {
    return moment(timestamp)
}