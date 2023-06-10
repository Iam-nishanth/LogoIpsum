import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f2f1e5;
  font: 400 16px inherit;
  min-height: 700px;
  color: #2c2927;
  padding-bottom: 100px;
  @media (min-width: 1000px) {
    padding-top: 150px;
  }
`;
export const Heading = styled.h1`
  font-size: 50px;
  font-family: "DM Serif Display", serif;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 80px;
  gap: 50px;
  @media (max-width: 400px) {
    padding: 30px;
  }
`;
export const Testimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: start;
  padding: 20px 0;
`;