export const getUserAvatarColor = (userId?: any) => {
    const AvatarColors = ["blue", "yellow", "magenta"]
    const firstNumberMatch = userId ? `${userId}`.match(/\d/) : 1;
    const firstNumber = firstNumberMatch ? parseInt(firstNumberMatch[0]) : 1;
    return AvatarColors[firstNumber % AvatarColors.length];
}