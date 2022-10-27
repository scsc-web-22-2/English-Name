function App() {
  return (
    <div className="App">
      <form action="http://127.0.0.1:8000/api/v1/category" method="post">
        <fieldset>
          <legend>성별 선택</legend>
          <input type="radio" name="gender" value="man" />남
          <input type="radio" name="gender" value="woman" />여
        </fieldset>

        <fieldset>
          <legend>질문1</legend>
          <input type="radio" name="degree" value="-2" />
          전혀 그렇지 않다
          <input type="radio" name="degree" value="-1" />
          그렇지 않다
          <input type="radio" name="degree" value="1" />
          그렇다
          <input type="radio" name="degree" value="2" />
          매우 그렇다
        </fieldset>
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
}

export default App;
