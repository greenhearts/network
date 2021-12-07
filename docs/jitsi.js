const domain = 'meet.jit.si';
const options = {
    roomName: 'paradise',
    width: 100%,
    height: 100%,
    parentNode: document.querySelector('#meet')
};
const api = new JitsiMeetExternalAPI(domain, options);
