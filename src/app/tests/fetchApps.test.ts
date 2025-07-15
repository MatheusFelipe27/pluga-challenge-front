import { fetchApps } from "@/api"
import { AppType } from "../page"

describe('fetchApps', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve<AppType[]>([
            {
              app_id: '1',
              name: 'Slack',
              color: '#000000',
              icon: 'https://fake.com/icon.png',
              link: 'https://slack.com'
            }
          ])
      })
    ) as jest.Mock
  })

  it('should fetch apps data correctly', async () => {
    const apps = await fetchApps()
    expect(apps).toHaveLength(1)
    expect(apps[0].name).toBe('Slack')
  })
})
