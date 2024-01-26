import React, { useEffect } from 'react'
import '../../assets/css/about.css'
import Navi from '../../components/Navi';
import Footer from '../../components/Footer';

function FAQ({ user }) {

  document.title = 'Genç Meram | SSS 🐍 (Sıkça Sorulan Sorular)';

  function onAccordionClicked(e) {
    const panel = e.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0 18px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "18px";
    }
  }

  useEffect(() => {
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');
    const s3 = document.getElementById('s3');

    setInterval(() => {
      s1.style.opacity = '1';
    }, 1000);
    setInterval(() => {
      s2.style.opacity = '1';
    }, 1500);
    setInterval(() => {
      s3.style.opacity = '1';
    }, 2000);
  }, []);

  return (
    <div>
      <Navi user={user} />
      <div className='about-container'>
        <div className="about-info">
          <div className="about-list" style={{ paddingTop: "70px" }}>
            {/**<h2 style={{ marginLeft: "20px" }}>Sıkça Sorulan Sorular</h2> */}
            <h1 id='s1' style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "48px", padding: "0", margin: "0 10px" }}>Sıkça</h1>
            <h1 id='s2' style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "48px", padding: "0", margin: "0" }}>Sorulan</h1>
            <h1 id='s3' style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "48px", padding: "0", margin: "0" }}>Sorular</h1>
          </div>
          <div className="about-content">
            <button onClick={onAccordionClicked} className="accordion"><b>Dersler ne zaman açılacak?</b></button>
            <div className="panel">
              <p>Dersler, ders sistemimiz tamamiyle bittiğinde beta süreci ile birlikte açılacaktır.</p>
            </div>
            <button onClick={onAccordionClicked} className="accordion"><b>Ne tür dersler verilecek?</b></button>
            <div className="panel">
              <p>Kültür, sanat, teknoloji, bilim, dil, kariyer kategorileri altında uzmanlar tarafından verilecek birçok eğitimimiz olacak!</p>
            </div>
            <button onClick={onAccordionClicked} className="accordion"><b>Dersler sonunda sertifika veriliyor mu?</b></button>
            <div className="panel">
              <p>Evet! Derslere ve ödevlerinize özen ve önem verip tamamladığınızda, son olarak bitirme ödevlerinizi kontrol ettiğimizde katılım sertifikası almaya hak kazanacaksınız!</p>
            </div>
            <button onClick={onAccordionClicked} className="accordion"><b>Neden başarı sertifikası değil de katılım sertifikası?</b></button>
            <div className="panel">
              <p>Milli Eğitim Bakanlığı (MEB) yönetmelikleri, başarı sertifikası verme süreçlerini titiz bir şekilde düzenlemektedir. Bu süreç, öğrencilerimizin derslerdeki başarılarını ölçmek, sertifikaları MEB standartlarına uygun bir şekilde hazırlamak ve bu sürecin her aşamasını MEB gözetiminde yürütmek anlamına gelir. Bu, başvuru ve inceleme sürecinin uzamasına ve sertifikaların hazırlanmasının zaman almasına neden olabilir.</p>
              <p>Meram Gelişim Akademisi olarak, öğrencilerimizin katılım ve çaba düzeylerini takdir ediyor ve bu nedenle katılım sertifikası verme kararı aldık. Bu sertifika, öğrencilerimizin etkinliklere aktif ve düzenli katılımını ödüllendirirken, aynı zamanda başarı sertifikası verme sürecinin uzunluğunu ve karmaşıklığını göz önünde bulundurarak hızlı ve etkili bir şekilde dağıtılabilir.</p>
              <p>Öğrencilerimizin bireysel başarılarına yönelik değerlendirme süreçleri daha geniş kapsamlıdır ve bu süreçlerin MEB standartlarına uygunluğunu sağlamak için gerekli zamanı almaktadır. Bu anlayışınız için teşekkür eder, Meram Gelişim Akademisi olarak öğrencilerimizin gelişimine yönelik çalışmalarımıza devam edeceğimizi belirtmek isteriz.</p>
            </div>
            <button onClick={onAccordionClicked} className="accordion"><b>Hangi iletişim kanallarını kullanabilirim? Sorularımı nasıl iletebilirim?</b></button>
            <div className="panel">
              <p>Bizimle iletişim kurmak için çeşitli kanalları kullanabilirsiniz. Sorularınızı veya taleplerinizi "İletişim" sayfamızda bulunan iletişim formu aracılığıyla bize iletebilir ya da destek ekibimize doğrudan e-posta veya telefon üzerinden ulaşabilirsiniz. Ayrıca sosyal medya hesaplarımız üzerinden de bize ulaşabilir ve güncel duyurularımızı takip edebilirsiniz.</p>
            </div>
            <button onClick={onAccordionClicked} className="accordion"><b>Eğitim programlarına katılmak için nasıl başvuru yapabilirim?</b></button>
            <div className="panel">
              <p>Eğitim programlarımıza katılmak için başvurularınızı online platformumuz üzerinden gerçekleştirebilirsiniz. Ana sayfamızda bulunan "Başvuru Formu" bölümüne giderek gerekli bilgileri doldurmanız yeterlidir. Başvurunuz incelendikten sonra size dönüş yapılacaktır.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQ