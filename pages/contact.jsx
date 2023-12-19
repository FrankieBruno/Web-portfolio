import Layout from '@/Layout';
import ContactForm from '@/ContactForm';
import styles from '../styles/contact.module.scss';

export default function Contact() {
  return <Layout>
    <div className={styles.contact}>
      <h1 className={styles.contactheading}>Contact me regarding opportunities</h1>
      
      
      <div className={styles.contactdetails}>
        <span>
          Email: 
          <a className={styles.link} href="mailto:frankiecyber@gmail.com">frankiecyber@gmail.com</a>
        </span>
        <span>
          Phone: 
          <a className={styles.link} href="tel:504-275-6267">504-275-6267</a>
        </span>
        <span>
          Linkedin: 
          <a className={styles.link} href="https://www.linkedin.com/in/frankiebrunojr/">linkedin.com/frankiebrunojr</a>
        </span>
      </div>
    </div>
  </Layout>;
}
