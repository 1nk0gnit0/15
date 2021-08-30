const getDataTime = () => {
  const date = new Date();

  let arrDate = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes()
  ]

  arrDate = arrDate.map(ev => {
    if (ev.toString().length < 2) return ("0" + ev);
    else return ev;
  })

  const commentDate = arrDate[0] + "-" + arrDate[1] + "-" + arrDate[2] + " " + arrDate[3] + ":" + arrDate[4];
  return commentDate;
}

export default getDataTime;
