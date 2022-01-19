import styled from 'styled-components'

export const UserListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 100%;
  color: #fff;
  margin: auto;

  display: flex;
  flex-direction: column;
`

export const UserListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #111827;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
`
export const UserListContent = styled.div`
  display: flex;
  flex-direction: row;
  color: #eee;
  font-size: 1rem;
  width: 100%;
  display: block;
  cursor: pointer;
`

export const UserListName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
export const UserListEmail = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: gray;
`
