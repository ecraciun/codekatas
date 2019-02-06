using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CK1
{
    public class Chopper
    {
        public int CurrentSearchItem { get; set; }
        public int[] CurrentSortedArray { get; set; }

        public int ExecuteSearch()
        {
            if (CurrentSortedArray.Length == 0) return -1;

            return ExecuteRealSearch(0, CurrentSortedArray.Length - 1);
        }

        private int ExecuteRealSearch(int startIndex, int endIndex)
        {
            if (startIndex == endIndex)
            {
                if (CurrentSortedArray[startIndex] == CurrentSearchItem)
                {
                    return startIndex;
                }
                else
                {
                    return -1;
                }
            }

            int middleIndex = (endIndex - startIndex) / 2 + startIndex;
            if (CurrentSearchItem <= CurrentSortedArray[middleIndex])
            {
                return ExecuteRealSearch(startIndex, middleIndex);
            }
            else
            {
                return ExecuteRealSearch(middleIndex + 1, endIndex);
            }
        }
    }
}
