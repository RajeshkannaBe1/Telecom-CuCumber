package Telecom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static WebDriver driver;
	@Before
	public static void RunBefore()
	{
		System.out.println("LAUNCH THE BROWSER");
		
	}
	@After
	public static void RunAfter()
	{
		System.out.println("QUIT THE BROWSER");
		
	}

}
