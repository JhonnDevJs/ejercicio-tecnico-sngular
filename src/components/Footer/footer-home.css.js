import { css } from "lit";

export const FooterHomeStyles = css`
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: #f7f7f8;
    width: 100%;
    box-sizing: border-box;
    margin-top: 1.5rem;
  }

  .pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn,
  .page-number,
  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    min-width: 36px;
    height: 36px;
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
    transition:
      background-color 0.3s,
      color 0.3s;
    padding: 0;
  }

  .btn {
    background-color: #ffffff;
    border: 1px solid #dfe3e8;
    color: #212b36;
  }

  .btn:hover:not(:disabled) {
    background-color: #f4f6f8;
  }

  .btn:disabled {
    background-color: #919eab;
    color: #C4CDD5;
    cursor: not-allowed;
    border-color: #919eab;
  }

  .page-number {
    background-color: #ffffff;
    border: 1px solid #dfe3e8;
    color: #212b36;
  }

  .page-number.active {
    background-color: #ffffff;
    color: #4339f2;
    border-color: #4339f2;
  }

  .page-number:not(.active):hover {
    background-color: #f4f6f8;
  }

  .dots {
    border: none;
    background-color: transparent;
    cursor: default;
  }
`;
