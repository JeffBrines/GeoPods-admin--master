//---------------Basic imports-----------------------
import React from "react";
import styles from "./styles.module.scss";

//---------------Assets------------------------------
import ICONS from "../../assets/icons";

const UserReportItem = ({ deletePod, report, setChooseUser }) => {
  const deleteUserReport = (id) => {
    deletePod.toggleModal();
    setChooseUser(report);
  };
  console.log(report);
  return (
    <div className={styles.admin__item}>
      <div className={styles.admin__name}>{report.from.name}</div>
      <div className={styles.admin__name}>{report.message}</div>
      <img
        src={
          report.suspectUser.photo
            ? report.suspectUser.photo
            : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgYGRUSGhoYGhgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjEhJCE0NDQ0NDQ0NDExMTQ0NDQxNDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ/NDQ0Mf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADUQAAIBAwMCBAQFAwQDAAAAAAECAAMRIQQxQRJRBSJhcROBkaEUscHR8AYy4UJScvEVYqL/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EACARAQEBAQADAAIDAQAAAAAAAAABEQISITFBUSJhcRP/2gAMAwEAAhEDEQA/APIqo6T3gCJdXlgt52YD6ZZVlyksFillEMoxBAQlOSWU94xSp5nFpXj9FAovvC1oPpkYQztBMuYJamZdqfrOIkZoKDvFEHSBImjXpdoi62jGVbTqrIIVFknQJq+Gv05tgzOKRtKlltKmDPuTOdIi7PDI/BkE6AZEEN1WnEpAH07yStWh1KSuLZI9JnmieTNfU6lenpQW7nvMbUVOIzrFYo1ME4MKmsZAyLgHeIlyIN3mrdZ+DPWJl6AuYl1S6VCJnC3E0xAuDCGid5lJ4gRzCN4ix3MzZTsOMixeoi2wflFH1JM6rmWLXbSSdUkQw1SM0UgaZjaNMtqmnO/Bhqb5zGWIO0tGM8pOqseFIGVOmMdClFo9SOLRZKc0KKXGIVoBr9pxvSNLT4M4+nIkiyNCqxEnw5HEUG7kwbXhlpFjYQ/4W28kQVIVRGXpWggsWV0lnSWSnDpQJkiyU4cCwsRNqj4I/T1Y9uYGpoSOIeRxnUlufSMM4A9JxqVoOumJAnXftM6s0brDiJOIgBoJmh3WAdY6Ay051SMJQmKX650PBSymSMosZBi9N5d2hiH+OskTz2kmvGDSawwaBEuDObYytDI8VWFWTR6k2ZqooIExKbx6lqLTNUNPp7RnT0oOjWDYMd0qZkmjpfB2fI/nrDa7wF0UMRPXeEUFWmpxc5v7xvV01ZGDbETOtXHyqtpSDa0WNMiexo6JCx67gXsD6e3Mtqf6c8vUvnBucdo+TOPI0xxbMsyHmOamj0nb0g6SExRWohtAJTuZ6vR+D9Y6SwDMLgEYPqDM1/C3RyhBve3v7SlFLU9OLTRoUPI3luLb9jCaXwpy3ScHi+009SnQgVbAYLm4PT2FvWWkPwnW4CPb39hYXjtXTK9yLDntMOq12uMDAGLbYuR8puUntSGepjv6fOHU/IlYWtpAHaZmpIUG82fEwyebgjbkTy+qqEnMeVStXJizJCu8CzTbKjiLOIwxgKkkWcwZhSsoyzQUlhKmRYoxSI5huoRQNLq0APedlLGSGkr0zoWdM6INIohllAIRYIRBDoIBIwhk0botNDT1TMtDHdNUHMynqNH4k2AWJsLDPaab+KsRYm4ItMDwvSvUcBFv37D3M9NS/p1r+ZgB6ZMzcSi+F1HVWU4bOTsMZ/P6T0WnplVVSbkAAnvL00soA4AH0FpHHbeBYfivhfxGv0hQTa/f1tEn8IsfKpI2Pfe17cCbb6tAx6jtwRbPBF/5mJajxhEx0ksbMRfYnO8fY9LFhTRQ9rrgFdwebX5lDqeoF+k3G19z7RHUa1KmSHF7HgjHaUeuxKlLjFgN7ZO37xnK0HUlixJ3OSNrdpR0AAN85uPbaN09Mf73NlvYm9yYtq9YgPSKd7csckcbTcrINKoAcjf7TX0FVWHwyLczCPiLDawHYADvz84ah4m53bm5OAT7mVmqU345pnIwCQJ47U0zzPV/+QKHrdiykEBSRv7TE19ZXNwoHtCSxWvPukEyR90g3pzQJOmINaV469LE4qWEizXpwDiadYYiFQRgpUzkKVlSsQqsZpLKU6ceo6Yn2iAbSR74I7STOw5WW9ODtNKrpzFHUTOtKAQirBiFUxSwEMkCIZDBowkPTNoBIZTBPS+A+O/AVh0g9Qx7jn84y39V1rAdQFvQZ955VTCqsMie88P/AKpDr0uLNww2PuOI7qfHlRbAXb/5+s+fq4xD1dXcS8YNelp/1Ic9YDDjGx4mXqfEfiN5gOdgB6zCevIlfM1JitblLUAEZ/6mlVqK5ASwGw72E8qmoF8yPqDe9/WNg16LW6o9K0xnOR63+8z9bWCqLr5uTczO/GNe97mLVtQW3MJFaYGp7w1PUC0yWeWR4hs3Di17ev7/ALy1bQlU6+DfbNhwTaZAqR3Ta0hShJ6G3A7c2klksVzkxFxmPoUW/RcX4JBg3or036s+srfZnwre0XeXIPEG4I3gite8TdJphbwbUhGUMxklQkdq04IU5qVlYWt9Jo0HuoxYRAp5djfvxDUa1hY7feNksU9U/wBA7yRD4p7/AJSTPi15NUaMuDa5PaYep0rKbEWnvF6EuFZc7E3v+US1ukQ4bffHrOcrVjxPTOqZvVfBy1+jIEya2lKHImwEIZIICERrSRhBLXIg1eF3mWnVeWNWUZpQmKE+OYRa0TadWLNpp3gxVg2MHaQMfGlvjRMtO3kDYqzjvFVMeo0ri8kWLS6vGfwko+llpwMPCLUgjTkCSQ3xfWFSvjvFPhmEooTJaYD22i7vHkpYz9Z1dDcdXH5wLPsTtO01vGPhE7XtLUqdv9MUztQsXYzZq0Q2bWixopyYyiwggY4l2pdIuxhqlZVHlzM2tVLb8Ym+ebWLZBvxK/y0kStOzfjBte6dPpC06BwxBseZRY3QqkWG4nCx0lXRLeZAbesX8Q0HUoJTzHOP1jjVgRvtm3BB4h6NTqPHtYTF1qPC67QFDtFCk914jTRx0+X5Wv6jEydT4CwFxkWmpf2rHm4TrxGqmgYcRd6BEQGXlC8jpKlZDVg06r2lROqtzJL9V5ZlxH6GlulwM/pAPQzLVYSKzopmNVKYEqFxHVji0Y1QHEHRzNJKFh7wtMVFImwXMO6dAHVi452+RhKKsDjfiA12odx0bgHJ/L5S5m1dXIu9KmQCDvcb2NxEaunIOBiMjw1inUpBN+9oan4QfKWcDvY3PsJrOZ+WNv6Z9EWOYyqG1wMGOanSoHA6mtf7do+KCIvlXB7k3P1mbfTcjB1dPCqSRuY1pqRFlBO18i427TTqFR5iov6xddVyQIb6xZ7Z34oglWGBexAtmVqeIADAndZXBuLDm228ymxNzmVm9WDvqyd/tEdRUM6zQTgzc5kYvVLtKlpdllHE3GVbySSRD3aCGBgEMJacK6rGpadDmAY2nVaOLTvX1WBA2sI5QquFt03sPp7zLR7GOJVuLGY65alB+CHNgACck9vSD1HhGMEG3H+Y+1dFt5ds35v6wLau+LXv33+sz42/GvKfliajw0k2C/a0UqeFkbz0f4phgAD7/czup0xCdTbtsP3jdn1eq8bW03TC6XSMxAUEk4E0F0ZY3I+k1lAordd8Z5/xC9LCyaUoCGwbbc3mNqHF/WNavWsSSTe+ZnO15SK1So95fTUmbAlUp3mp4fUKXXgzVECTTdJzGeu5uIPVVYChqiLzP1NQagHDZxbGPymhTdETqQAn1/3W5EwVznYwb6tlwZYmzpqwJIK75IGx+Q2jB1XT5SuP5vMHT+IgcZ7zSp65WG3z5hdMaPw6ZF2F/eVbp3NrAWURJavlxk7xFtWerJt3tvKQtLXVRa9r+37TFr1WI7Da/EPVrgjf7kH9olU1bEBb3HYzfMY6VZbD3/KDYXFpe0o78TowAbCUqPJUgnMcFVadpUC+BL09OWF727esZ01EoLkZ95ddSLnnVP8Axx9JI5c9hOzHl034xqIYdWjCeH/+624OfylxpFI8rgn1xDyi8aTactCVqLKbMPuD+UpNRmophUMFL9UUu7YgVMt1wTGMgtN6eqVNwZq0StS5a54t29p54GHo1yMzPXOnnrG7Sekh2FtsjEx/G9T1KPKB5m9bjj2lWr9Q8xgHr2UobEH+YmP+bfm8/U3lJoajS8jMQdbRxKh7GE/EwDShhi0ZqpMIjWzFQYUNHFpv8USbiG1K9agjeIU1zNXQIL3J2zM30Z7J0PD3IvbEO56MD7zb1BAW4GO0w9UeYTrVmAnVmxEASd5QsBBO83GRn1jjkdot8QyrPKHM1BTtGobTjtGfDdN5Gc+1sRPVWviMstxWZNVZpw0ySB37wZJluo95pjT1MIgy30lKurBiLGDaZ8f215G/xfqZIlaSa8YPKvYfjG6ekbekqtc3FrzLp1iIdtUSdsTj4uuvT0XDoQRewuAN723vFl0jn/T9wCPcE4g9N4sgHStluM3GCbcRZvFSF8rXzyBjkH1hL1Pi6kp78JgliMZIGT+0lPTK6lkPTY2PUQb9thiYo1THnePaDTFxfqAH3mrbPesyS/haopBIO4g5sHTI/JDW6bjY22uPaIKljkbYmue5WeucCSkTviUqArHCfeUqkEes1o8S3xsW+cE/pNDT+HgjzHJ2Atj1Y/pFdTpWQ+bntkSnXO4rzcAUkbG0V1NIubjfcj15jN5WmwVgSLjt37S651c3CB0TWvaLVKJHE9HV8RRlKlLX7ekzXpFjjI/Scvc+x09X4zkp94UUhG30drFuRfGZyjpQVLdV+AALmP1FuiPUExiDQgDG5NsiaVDTKtuvN/oO36TPU/Zn9L6a7WXf9LQur8PTbvmXpuiDyjF895m6/XN1Yb6TH2+j/oGp8NBv07jiYVdLG02hrWveZ+pXqN7TpzrPWM8CXAMIaHeESw3zN+2A0duSZWpnmWdxwIIma55F6dVxzmD6p1mlCZuRm1e85KgzssCSTkkC9HptLc2+fb840umANjn6TJXVHvGqeqI5M89ld5Y0301JRlc+5/SKVtMl/KGA9ZelW6rAge/+IxVrr09JG221/tM7YclB0/h4P+oWjFPS8qcCLOLW49I5p36VsefXMbashujQ2zze/rHWZT/c197Dj3ImcuqIwNpzrJJP1llFsH1dC+Vt7DH2me+I18S214FyDOnOxjr2XWoQY3+PYjgHg8xV0HEEwm8lZ2xRhmXVTi0lpelXKG4jfgiw8PZuCP8AkLfeBPhrjbp+ozGW8QYix9cxU19xOf8AJv0T1JYnzb/aCWaJdLEFQb8nc/PiLmgozc2+V5uX+mbHKNgQTn9+DDVNRja5Pfj2i4WXKEwsl+mVdtV5bfeKVHvDNSg2pyk5W0H4hgnJO8M+1rQRjBQWEGRGemcKWjowt0XnHpkbgxm07nfeXkcIlDKFZoNUMEaB/wBp+hh5ftYT6ZLRp6BG4P0lGSXkPEC07L9MktOHk05G4jVLT3mkiN6EesjPY/2j9Jx8rXXxgNJQBLFQ25OJGzwPkJxRHGdGp2XO59YUox8xXH6ShqqgBIux4Pbv7w2mrsSG61te9r5H7w3Gs12kjdvrYfS8NRdj/aL/AJfecZx8S/sdv5eG6mY/22A9LY9JXpeKj0bmwvffuD8xF0pkk8Wyb8R00nOAwsNswPiFVVBC26j/AHERnX4V5T8MlgS+Di9v8xd9Id1YP7b/AEmeuoIwTiH02sK7W4OfSP8AKM+qjoRgi3OZSaSOrglwAdh2zEqmkdd1PyyJvnrfrPXOFnEGYYpB1EKmxFjNazihM4J2VJkhVA7yM9oHqnDDDqzPBs07actEq2lbQvSZ34cLRgLThhvhypSZ2NYCRLU+nn/uWZIMrDUszjqBsBbtCPqTxFyolTCyU6Oa/rFq7A+p7yrQbGEitVtJOXkm2XqEnU59pJJwjrVk5lHkkmoKBU2i9PeSSbjLY0Zz8j+ke5H/ACkknLr66Rx9/lFPEN52SPP1ViajeXoySTt+HL8tDS8zQpfvJJOXTcKNhmtj+GZ2pkknXlz6CMrJJNs1wQyf2/WckhTA2lkkklfhgqy0kk5V0UaCaSSSCaBM7JJkNpUySTSDaDaSSEAckkk0H//Z"
        }
        className={styles.admin__photo}
      />
      <div className={styles.admin__name}>
        <div> {report.suspectUser.name}</div>
        <div>{report.suspectUser._id} </div>
        <div>{report.suspectUser.email} </div>
      </div>

      <div className={styles.admin__info}>
        <div className={styles.admin__setting}>
          <div className={styles.admin__settingOptions}>
            <button onClick={deleteUserReport}>{ICONS.utils.delete}</button>
          </div>
          {ICONS.utils.more}
        </div>
      </div>
    </div>
  );
};

export default UserReportItem;
