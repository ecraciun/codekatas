﻿// ------------------------------------------------------------------------------
//  <auto-generated>
//      This code was generated by SpecFlow (http://www.specflow.org/).
//      SpecFlow Version:2.4.0.0
//      SpecFlow Generator Version:2.4.0.0
// 
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
//  </auto-generated>
// ------------------------------------------------------------------------------
#region Designer generated code
#pragma warning disable
namespace CK1.Specs
{
    using TechTalk.SpecFlow;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("TechTalk.SpecFlow", "2.4.0.0")]
    [System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [TechTalk.SpecRun.FeatureAttribute("Chop", Description="\tIn order to avoid silly mistakes\r\n\tAs a math idiot\r\n\tI want to be told the sum o" +
        "f two numbers", SourceFile="Chop.feature", SourceLine=0)]
    public partial class ChopFeature
    {
        
        private TechTalk.SpecFlow.ITestRunner testRunner;
        
#line 1 "Chop.feature"
#line hidden
        
        [TechTalk.SpecRun.FeatureInitialize()]
        public virtual void FeatureSetup()
        {
            testRunner = TechTalk.SpecFlow.TestRunnerManager.GetTestRunner();
            TechTalk.SpecFlow.FeatureInfo featureInfo = new TechTalk.SpecFlow.FeatureInfo(new System.Globalization.CultureInfo("en-US"), "Chop", "\tIn order to avoid silly mistakes\r\n\tAs a math idiot\r\n\tI want to be told the sum o" +
                    "f two numbers", ProgrammingLanguage.CSharp, ((string[])(null)));
            testRunner.OnFeatureStart(featureInfo);
        }
        
        [TechTalk.SpecRun.FeatureCleanup()]
        public virtual void FeatureTearDown()
        {
            testRunner.OnFeatureEnd();
            testRunner = null;
        }
        
        public virtual void TestInitialize()
        {
        }
        
        [TechTalk.SpecRun.ScenarioCleanup()]
        public virtual void ScenarioTearDown()
        {
            testRunner.OnScenarioEnd();
        }
        
        public virtual void ScenarioInitialize(TechTalk.SpecFlow.ScenarioInfo scenarioInfo)
        {
            testRunner.OnScenarioInitialize(scenarioInfo);
        }
        
        public virtual void ScenarioStart()
        {
            testRunner.OnScenarioStart();
        }
        
        public virtual void ScenarioCleanup()
        {
            testRunner.CollectScenarioErrors();
        }
        
        [TechTalk.SpecRun.ScenarioAttribute("Find a number in a short array", SourceLine=6)]
        public virtual void FindANumberInAShortArray()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Find a number in a short array", null, ((string[])(null)));
#line 7
this.ScenarioInitialize(scenarioInfo);
            this.ScenarioStart();
#line 8
 testRunner.Given("I have a chopper", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Given ");
#line 9
 testRunner.When("I enter 1 for the search value", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line 10
 testRunner.And("enter [1, 3, 5] for the array", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "And ");
#line 11
 testRunner.Then("the result should be 0 on the screen", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [TechTalk.SpecRun.TestRunCleanup()]
        public virtual void TestRunCleanup()
        {
            TechTalk.SpecFlow.TestRunnerManager.GetTestRunner().OnTestRunEnd();
        }
    }
}
#pragma warning restore
#endregion