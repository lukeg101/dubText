#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((t>>5)|(t>>4)|((t%42)*(t>>4)|(0x15483113)-(t>>4))/(t>>16)^(t|(t>>4)));
	}
}