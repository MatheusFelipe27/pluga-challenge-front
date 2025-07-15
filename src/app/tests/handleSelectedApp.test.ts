import { handleSelectedApp } from "@/functions"
import { AppType } from "../page"

const app = {
  app_id: '1',
  name: 'Slack',
  color: '#000000',
  icon: 'https://fake.com/icon.png',
  link: 'https://slack.com'
}

describe('handleSelectedApp', () => {
  it('should set selected app, open modal and update lastSelectedApps', () => {
    const setSelectedApp = jest.fn()
    const setShouldOpenModal = jest.fn()
    const setLastSelectedApps = jest.fn()
    const lastSelectedApps: AppType[] = []

    Storage.prototype.setItem = jest.fn()

    handleSelectedApp(app, setSelectedApp, setShouldOpenModal, lastSelectedApps, setLastSelectedApps)

    expect(setSelectedApp).toHaveBeenCalled()
    expect(setShouldOpenModal).toHaveBeenCalledWith(true)
    expect(setLastSelectedApps).toHaveBeenCalled()
    expect(localStorage.setItem).toHaveBeenCalled()
  })
})
