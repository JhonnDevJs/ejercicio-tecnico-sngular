import { css } from "lit"

export const CardPersonStyles = css`
  :root{
    display: block;
  }

  .card{
    display: flex;
    flex-direction: column;
    max-width: 260px;
    width: 100%;
    max-height: 294px;
    height: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 6px;
    border: none;
  }

  .__image {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .__footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 4px;
  }
  .__name-person{
    font-size: 14px;
    margin: 0;
  }

  button {
    border: none;
    width: 24px;
    height: 24px;
    background-color: #F7F7F8;
    border-radius: 25px;
  }
`