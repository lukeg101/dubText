#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((t|(t>>9|t>>7))*t&(t>>11|t>>9));
	}
}