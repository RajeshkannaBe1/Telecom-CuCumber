package Telecom;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",tags= {"@Blank"},plugin = {"html:target"},monochrome=(true),dryRun=(false),glue="Telecom")
public class CuCuRunner {
	

}
