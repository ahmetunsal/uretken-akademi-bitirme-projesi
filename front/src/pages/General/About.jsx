import React from 'react'
import '../../assets/css/about.css'
import Navi from '../../components/Navi';
import Footer from '../../components/Footer';

function About({ user }) {

  document.title = 'Genç Meram | Hakkımızda';

  return (
    <div>
      <Navi user={user} />
      <div className='about-container'>
        <div className="about-info">
          <div className="about-list">
            <h2 style={{ marginLeft: "20px" }}>Hakkımızda</h2>
            <ul>
              <li><a href="#video">Tanıtım Videosu</a></li>
              <li><a href="#baskan">Başkanın Mesajı</a></li>
              <li><a href="#nedir">Meram Genç Nedir?</a></li>
              <li><a href="#misyon">Misyonumuz</a></li>
              <li><a href="#vizyon">Vizyonumuz</a></li>
            </ul>
          </div>
          <div className="about-content">
            <div id='video'>
              <h2>Tanıtım Videosu</h2>
              <iframe src="https://www.youtube.com/embed/ADiw0AZ37rs?si=Qqx5EMcRwB7xtcQv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div id="baskan">
              <h2>Başkan'ın Mesajı</h2>
              <p>Merhaba gençler,</p>
              <p>Meram Gelişim Akademisi, siz gençlerimizin potansiyelini keşfetmeyi, yeteneklerinizi geliştirmeyi ve geleceğe güvenle adım atmanızı sağlamayı amaçlıyor. Bizler, sizin eğitim hayatınızı sadece ders kitapları ile sınırlamıyoruz; aynı zamanda karakterinizi şekillendirecek, liderlik becerilerinizi güçlendirecek ve sorunlara yaratıcı çözümler bulmanıza yardımcı olacak bir ortam sunuyoruz.</p>
              <p>Bu akademide, sadece bilgi değil, aynı zamanda etik değerlere, toplumsal sorumluluk anlayışına ve özgün düşünceye önem veriyoruz. Sizleri sadece başarılı birer öğrenci olarak değil, aynı zamanda güçlü, bilinçli ve etkili birer birey olarak yetiştirmeyi hedefliyoruz.</p>
              <p>Unutmayın ki, her birinizin içinde birer lider, birer değişim yaratıcı ve birer başarı hikayesi var. Meram Gelişim Akademisi olarak, bu potansiyeli ortaya çıkarmak ve geliştirmek için buradayız. Sizlerin başarıları, geleceğimizin teminatı olacak. Bu yolda birlikte ilerlemek, öğrenmek ve büyümek için sabırsızlanıyorum.</p>
              <p>Yolunuz açık olsun, gençler! Hep birlikte, daha aydınlık bir geleceğe adım atalım.</p>
            </div>
            <hr />
            <div id="nedir">
              <h2>Meram Gelişim Akademisi Nedir?</h2>
              <p>Meram Gelişim Akademisi, gençlerin potansiyelini keşfetmelerine, sağlıklı bir yaşam tarzı benimsemelerine ve spor ile iç içe bir gençlik dönemi geçirmelerine odaklanan dinamik bir eğitim kurumudur.</p>
              <h3>Spor ve Aktivite</h3>
              <p>Meram Gelişim Akademisi, gençlerin fiziksel aktivitelerle buluştuğu bir platform sunar. Sporun, gençlerin enerjisini olumlu bir şekilde yönlendirmelerine, disiplin kazanmalarına ve ekip ruhuyla çalışmalarına olanak tanıyan çeşitli programlar ve etkinliklerle doludur. Futbol, basketbol, yüzme gibi spor dallarında uzman eğitmenler eşliğinde gerçekleştirilen dersler, öğrencilere hem rekabetçi bir ortam sunar hem de sosyal bağlarını güçlendirir.</p>
              <h3>Sağlık</h3>
              <p>Meram Gelişim Akademisi, gençlerin sağlıklı bir yaşam biçimini benimsemelerine vurgu yapar. Beslenme alışkanlıkları, spor ve mental sağlık konularında düzenlenen atölye çalışmaları ve seminerler, öğrencilere sağlıklı bir yaşam sürmeleri için gerekli bilgileri kazandırır. Ayrıca, modern tesislerdeki fitness alanları ve spor salonları, öğrencilerin fiziksel formda kalmalarını destekler.</p>
              <h3>Gençlik ve Gelişim</h3>
              <p>Meram Gelişim Akademisi, gençlerin bireysel ve toplumsal gelişimine odaklanır. Liderlik eğitimleri, sosyal sorumluluk projeleri ve kültürel etkinlikler, öğrencilerin gençliklerini anlamlı ve üretken bir şekilde geçirmelerine yardımcı olur. Gençler, birbirleriyle etkileşimde bulunarak, farklı kültürleri anlama ve hoşgörü geliştirme fırsatları bulurlar.</p>
            </div>
            <hr />
            <div id="misyon">
              <h2>Misyonumuz</h2>
              <p>Meram Gelişim Akademisi'nin misyonu, gençlerimizin potansiyellerini keşfetmelerini, güçlü bir karakter geliştirmelerini ve sosyal sorumluluk bilinciyle donanmalarını sağlamaktır. Bu doğrultuda:</p>
              <ol>
                <li><h3>Eğitimde Mükemmellik:</h3><p style={{ margin: "0" }}>Her bir genç, en iyi eğitim ve öğretim standartlarına ulaşarak, bilgi ve becerilerini en üst düzeye çıkaracak bir akademik çevrede yetiştirilecektir.</p></li>
                <li><h3>Sağlıklı Yaşam Biçimi:</h3><p style={{ margin: "0" }}>Spor ve sağlıklı yaşam konularında bilinçlendirme çalışmaları ve etkinlikler aracılığıyla gençlerimiz, bedensel ve zihinsel sağlıklarını koruyarak dengeli bir yaşam tarzını benimseyeceklerdir.</p></li>
                <li><h3>Liderlik ve Sosyal Sorumluluk:</h3><p style={{ margin: "0" }}>Gençlerimiz, liderlik becerilerini geliştirme fırsatları ve sosyal sorumluluk projeleri ile topluma katkıda bulunma bilinci kazanacaklardır</p></li>
                <li><h3>Çeşitlilik ve Hoşgörü:</h3><p style={{ margin: "0" }}>Kültürel etkinlikler ve uluslararası projeler aracılığıyla gençlerimiz, farklılıklara saygı gösterme, hoşgörü ve kültürler arası iletişim becerileri kazanacaklardır.</p></li>
                <li><h3>Bireysel Gelişim:</h3><p style={{ margin: "0" }}>Her bir genç, kendi yeteneklerini keşfetme, özgün düşünme ve kendi potansiyelini en üst düzeye çıkarma yolunda desteklenerek, bireysel gelişimini tam anlamıyla yaşayacaktır.</p></li>
              </ol>
            </div>
            <hr />
            <div id="vizyon">
              <h2>Vizyonumuz</h2>
              <p>Meram Gelişim Akademisi olarak vizyonumuz, gençleri sadece eğitimde değil, aynı zamanda spor, sağlık ve kişisel gelişim alanlarında lider bireyler olarak yetiştirmektir. Gençlerimizi, bilgiye dayalı bir eğitimle donatmanın yanı sıra, sağlıklı bir yaşam tarzını benimsemeye teşvik ederek, toplumlarına olumlu bir etki yapacak bireyler olarak yetişmelerine öncülük etmeyi hedefliyoruz.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About