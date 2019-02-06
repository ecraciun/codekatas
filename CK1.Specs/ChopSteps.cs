using System;
using TechTalk.SpecFlow;
using CK1;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CK1.Specs
{
    [Binding]
    public class ChopSteps
    {
        private Chopper _chopper;

        [Given(@"I have a chopper")]
        public void GivenIHaveAChopper()
        {
            _chopper = new Chopper();
        }
        
        [When(@"I enter (.*) for the search value")]
        public void WhenIEnterForTheSearchValue(int searchFor)
        {
            _chopper.CurrentSearchItem = searchFor;
        }
        
        // how the hell do you specify an array as a parameter??
        [When(@"enter \[(.*), (.*), (.*)] for the array")]
        public void WhenEnterForTheArray(int p0, int p1, int p2)
        {
            _chopper.CurrentSortedArray = new int[] {p0, p1, p2};
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int expectedIndex)
        {
            var result = _chopper.ExecuteSearch();
            Assert.AreEqual(expectedIndex, result);
        }
    }
}
