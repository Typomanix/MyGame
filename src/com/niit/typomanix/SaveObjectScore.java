package com.niit.typomanix;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class SaveObjectScore {

	
public static boolean register(ScoreBoard sc) {
		
		
		Configuration cfg= new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory= cfg.buildSessionFactory();
		Session session= factory.openSession();
		Transaction t= session.beginTransaction();
		t.begin();
		session.save(sc);
		t.commit();
		session.close();
		return true;
	 
	
	
	}

}
