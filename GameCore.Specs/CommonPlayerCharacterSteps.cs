using TechTalk.SpecFlow;

namespace GameCore.Specs
{
    [Binding]
    public class CommonPlayerCharacterSteps
    {
        private readonly PlayerCharacterStepsContext _context;

        public CommonPlayerCharacterSteps(PlayerCharacterStepsContext context)
        {
            _context = context;
        }


        [Given(@"I'm a new player")]
        public void GivenIMANewPlayer()
        {
            _context.Player = new PlayerCharacter();
        }
    }
}