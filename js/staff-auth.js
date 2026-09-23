const params = new URLSearchParams(window.location.search);
const role = params.get("role") || "asha";

const roleData = {
 asha:{title:"ASHA / ANM",description:"Access patient registration, digital triage, referrals and community follow-up workflows.",icon:"🩺",heading:"ASHA / ANM Login",subtitle:"Authorized field health worker access.",dashboard:"asha-dashboard.html"},
 doctor:{title:"Doctor",description:"Access patient history, clinical consultation, referrals and care review.",icon:"👨‍⚕️",heading:"Doctor Login",subtitle:"Authorized clinical access.",dashboard:"doctor-dashboard.html"},
 admin:{title:"Facility Admin",description:"Manage facility queues, referrals, staff operations and healthcare workflows.",icon:"🏥",heading:"Facility Admin Login",subtitle:"Authorized facility operations access.",dashboard:"facility-dashboard.html"},
 district:{title:"District Authority",description:"Monitor facilities, referral delays, healthcare trends and district-level indicators.",icon:"🏛️",heading:"District Authority Login",subtitle:"Authorized administrative monitoring access.",dashboard:"district-dashboard.html"}
};

const selectedRole = roleData[role] || roleData.asha;
document.getElementById("roleTitle").textContent = selectedRole.title;
document.getElementById("roleDescription").textContent = selectedRole.description;
document.getElementById("loginIcon").textContent = selectedRole.icon;
document.getElementById("loginHeading").textContent = selectedRole.heading;
document.getElementById("loginSubtitle").textContent = selectedRole.subtitle;

function loginStaff(){
 const staffId=document.getElementById("staffId").value.trim();
 const password=document.getElementById("password").value.trim();
 if(!staffId||!password){ alert("Please enter your Staff ID and password."); return; }
 localStorage.setItem("carebridgeStaffRole", role);
 localStorage.setItem("carebridgeStaffId", staffId);
 localStorage.setItem("carebridgeLoggedIn", "true");
 window.location.href = selectedRole.dashboard;
}
