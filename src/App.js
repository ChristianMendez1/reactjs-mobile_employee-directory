import logo from './logo.svg';
import './App.css';
import profile from './images/profile.png'
import next from './images/next.png'

function App() {
  return (
    <div class='row'>
      <div class='column'>
        <div class='title'>Employee Directory</div>
        <input id='searchbar'></input>
        <div class='employeelist'>
          <div class='employeeimagecolumn'>
            <img class='employeeimage' src={profile}/>
          </div>
          <div class='employeelistcolumn'>
            <b>James King</b> President and CEO
          </div>
        </div>
        <div class='employeelist'>
          <div class='employeeimagecolumn'>
            <img class='employeeimage' src={profile}/>
          </div>
          <div class='employeelistcolumn'>
            <b>Julie Taylor</b> VIP of Marketing
          </div>
        </div>
        <div class='employeelist'>
          <div class='employeeimagecolumn'>
            <img class='employeeimage' src={profile}/>
          </div>
          <div class='employeelistcolumn'>
            <b>Eugene Lee</b> CFO
          </div>
        </div>
        <div class='employeelist'>
          <div class='employeeimagecolumn'>
            <img class='employeeimage' src={profile}/>
          </div>
          <div class='employeelistcolumn'>
            <b>John Williams</b> VIP of Engineering
          </div>
        </div>
        <div class='employeelist'>
          <div class='employeeimagecolumn'>
            <img class='employeeimage' src={profile}/>
          </div>
          <div class='employeelistcolumn'>
            <b>Ray Moore</b> VIP of Sales
          </div>
        </div>
        <div class='employeelist'>
          <div class='employeeimagecolumn'>
            <img class='employeeimage' src={profile}/>
          </div>
          <div class='employeelistcolumn'>
            <b>Paul Jones</b> QA Manager
          </div>
        </div>
      </div>
      <div class='column'>
        <div class='title'> Employee</div>
        <div id='profilepic'>
          <div class='profilepiccolumn'>
            <img class='profileimage' src={profile}/>
          </div>
          <div class='profilepiccolumn'>
            <b>Paul Jones</b> QA Manager
          </div>
        </div>
        <div class='profiledivs'>
          <div class='profiledivcolumn'>
            <b>Call Office</b> 781-000-0000
          </div>
          <div class='nextcolumn'>
            <img class='nextimage' src={next}/>
          </div>
        </div>
        <div class='profiledivs'>
          <div class='profiledivcolumn'>
            <b>Call Mobile</b> 917-000-000
          </div>
          <div class='nextcolumn'>
            <img class='nextimage' src={next}/>
          </div>
          </div>
        <div class='profiledivs'>
          <div class='profiledivcolumn'>
            <b>SMS</b> 917-000-000
          </div>
          <div class='nextcolumn'>
            <img class='nextimage' src={next}/>
          </div>
          </div>
        <div class='profiledivs'>
          <div class='profiledivcolumn'>
            <b>Email</b> jtaylor@fakemail.com
          </div>
          <div class='nextcolumn'>
            <img class='nextimage' src={next}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
