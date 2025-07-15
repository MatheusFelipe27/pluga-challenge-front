import { handleSearch } from "@/functions"

describe('handleSearch', () => {
  it('should update the search state and reset the page', () => {
    const setSearch = jest.fn()
    const setPage = jest.fn()

    handleSearch('Slack', setSearch, setPage)

    expect(setSearch).toHaveBeenCalledWith('Slack')
    expect(setPage).toHaveBeenCalledWith(1)
  })
})
