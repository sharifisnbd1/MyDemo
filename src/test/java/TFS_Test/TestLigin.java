package TFS_Test;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\shari\\eclipse-workspace\\com.TFS\\src\\test\\java\\TFS_Features",
		glue= {"StepDefinitions"},
		
		plugin= {"html:target/cucumber-html-report"}
		)


public class TestLigin {
	
	
}
