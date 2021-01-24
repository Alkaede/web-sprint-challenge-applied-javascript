

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const div = document.createElement('div');
  div.classList.add('header');
  const hTitle = document.createElement('h1');
  const dSpan = document.createElement('span');
  dSpan.classList.add('date');
  const tSpan = document.createElement('span');
  tSpan.classList.add('temp');

  dSpan.textContent = date;
  hTitle.textContent = title;
  tSpan.textContent = temp;

  div.appendChild(dSpan);
  div.appendChild(hTitle);
  div.appendChild(tSpan);

  return Header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const selParent = document.querySelector(selector);

  return selParent.appendChild(Header('Lambda Times', 'Jan 24, 2021', '58*F'));

}

export { Header, headerAppender }
