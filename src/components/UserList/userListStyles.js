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

export const UserListButtons = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

export const UserListEditIcon = styled.button`
  margin: 0 0.5rem;
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  background-image: linear-gradient(to right, #ec4899, #8b5cf6);
  border-radius: 10%;

  &:hover {
    opacity: 0.6;
  }
`

export const UserListDeleteIcon = styled.button`
  margin: 0 0.5rem;
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  background-image: linear-gradient(to right, crimson, #ec4899);
  border-radius: 10%;

  &:hover {
    opacity: 0.6;
  }
`
